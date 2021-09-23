import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movie: Movie = {
    title: 'A volta dos que nao foram',
    director: 'alessandro',
    genres: 'comédia',
    year: 2021
  };

  constructor(private router: Router,
              private movieService: MovieService) { }

  ngOnInit(): void {
  }

  createMovie(): void {
    this.movieService.create(this.movie).subscribe(() => {
       this.router.navigate(["/movies"]);
     });
  }

  cancel(){
    this.router.navigate(["/movies"])
  }

}
