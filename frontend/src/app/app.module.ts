import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/** Material UI */
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

/** Components */
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { NavigationComponent } from "./components/template/navigation/navigation.component";
import { FormsModule } from '@angular/forms';


/** Views */
import { HomeComponent } from "./views/home/home.component";
import { MoviesComponent } from './views/movies/movies.component';
import { SeriesComponent } from './views/series/series.component';
import { MovieCreateComponent } from './components/movie/movie-create/movie-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { MovieUpdateComponent } from './components/movie/movie-update/movie-update.component';
import { MovieDeleteComponent } from './components/movie/movie-delete/movie-delete.component';
import { DialogComponent } from './components/shared/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    MovieCreateComponent,
    MovieListComponent,
    MovieUpdateComponent,
    MovieDeleteComponent,
    DialogComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
