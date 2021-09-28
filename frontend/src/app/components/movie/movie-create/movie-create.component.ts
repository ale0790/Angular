import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedService } from "../../shared/shared.service";
import { Movie } from "../movie.model";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movie-create",
  templateUrl: "./movie-create.component.html",
  styleUrls: ["./movie-create.component.css"],
})
export class MovieCreateComponent implements OnInit {
  years = [2021, 2020, 2019, 2018, 2017, 2016];

  movie: Movie = {
    title: "",
    director: "",
    genres: "",
    year: ""
  };

  constructor(
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  createForm!: FormGroup;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(4)]],
      director: ["", Validators.required],
      genres: ["", Validators.required],
      year: ["", Validators.required],
    });
  }

errorHandlingForm = (control: string, error: string) => {
  return this.createForm.controls[control].hasError(error);
}

  createMovie(): void {
    if (this.createForm.valid) {
      this.movieService.create(this.createForm.value).subscribe(() => {
        this.sharedService.showMessage("Filme adicionado com sucesso");
        this.router.navigate(["/movies"]);
      });
    }
  }

  cancel() {
    this.router.navigate(["/movies"]);
  }
}
