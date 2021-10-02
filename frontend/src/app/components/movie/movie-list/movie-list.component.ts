import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../../shared/dialog.service';
import { SharedService } from '../../shared/shared.service';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

movies: Movie[] = [];

displayedColumns: string[] = ['id', 'title', 'director', 'genres', 'year', 'actions'];

  constructor(private movieService: MovieService,
     private dialogService: DialogService,
     private sharedService: SharedService) { }

  ngOnInit(): void {
    this.updateMovies();
  }

  updateMovies(){
    this.movieService.list().subscribe(movieList => {
      this.movies = movieList;
  });
  }

  onDelete(id: any){
    this.dialogService.openConfigmDialog('Tem certeza que deseja remover este filme?').afterClosed().subscribe((res)  => {
      if(res){
        this.movieService.delete(id).subscribe(() => {
          this.sharedService.showMessage('Filme deletado com sucesso');
          this.updateMovies();
        });
      }
    }
    );
  }

}
