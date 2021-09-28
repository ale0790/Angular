import { MovieService } from './../movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from './../movie.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})

export class MovieDeleteComponent implements OnInit {

  years =[2021,2020,2019,2018,2017,2016];

  movie: Movie = {
    title: '',
    director: '',
    genres: '',
    year: ''  
  };


  constructor(private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.movieService.getById(id).subscribe(response =>
      this.movie = response
      )
  }

  deleteMovie(): void {
    this.movieService.delete(this.movie.id!).subscribe(() => {
      this.sharedService.showMessage('Filme deletado com sucesso');
      this.router.navigate(["/movies"]);
    });
  }

  cancel(): void{
    this.router.navigate(["/movies"])
  }

}
