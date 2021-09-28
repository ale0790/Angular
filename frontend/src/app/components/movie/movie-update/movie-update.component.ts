import { Movie } from './../movie.model';
import { SharedService } from './../../shared/shared.service';
import { MovieService } from './../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    year: ''  
  };


  constructor(private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sharedService: SharedService,
    private fb: FormBuilder) { }

    updateForm!: FormGroup;

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.updateForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(4)]],
      director: ["", Validators.required],
      genres: ["", Validators.required],
      year: ["", Validators.required],
    })

    this.movieService.getById(id).subscribe(response => {
      this.movie = response
      this.updateForm.setValue({
        title: this.movie.title,
        director: this.movie.director,
        genres: this.movie.genres,
        year: this.movie.year
      });
    });
  }

  errorHandlingForm = (control: string, error: string) => {
    return this.updateForm.controls[control].hasError(error);
  }
  

  updateMovie() {
    if (this.updateForm.valid) {
      this.movieService.update(this.updateForm.value).subscribe(() => {
        this.sharedService.showMessage('Filme atualizado com sucesso');
        this.router.navigate(["/movies"]);
      });
    }
    
  }

  cancel(){
    this.router.navigate(["/movies"])
  }
}
