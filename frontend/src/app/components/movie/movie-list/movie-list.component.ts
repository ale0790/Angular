import { Component, OnInit } from '@angular/core';
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

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.list().subscribe(movieList => {
        this.movies = movieList;
    });
  }

}
