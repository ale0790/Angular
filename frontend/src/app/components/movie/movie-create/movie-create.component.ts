import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  years =[2021,2020,2019,2018,2017,2016];
 
  movie: Movie = {
    title: '',
    director: '',
    genres: '',
    year: NaN  
  };

  constructor(private router: Router,
              private movieService: MovieService,
              private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  createMovie(): void {
    this.movieService.create(this.movie).subscribe(() => {
       this.sharedService.showMessage('Filme adicionado com sucesso');
       this.router.navigate(["/movies"]);
     });
  }

  cancel(){
    this.router.navigate(["/movies"])
  }

}
