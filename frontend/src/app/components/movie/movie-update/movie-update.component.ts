import { Movie } from './../movie.model';
import { SharedService } from './../../shared/shared.service';
import { MovieService } from './../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  years =[2021,2020,2019,2018,2017,2016];

  movie: Movie = {
    title: '',
    director: '',
    genres: '',
    year: NaN  
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

  updateMovie() {
    this.movieService.update(this.movie).subscribe(() => {
      this.sharedService.showMessage('Filme atualizado com sucesso');
      this.router.navigate(["/movies"]);
    });
  }

  cancel(){
    this.router.navigate(["/movies"])
  }
}
