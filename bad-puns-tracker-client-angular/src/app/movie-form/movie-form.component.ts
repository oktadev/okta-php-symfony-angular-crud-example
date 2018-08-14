import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Movie, MovieService } from '../movie.service';
import 'rxjs/Rx';

@Component({
    selector: 'app-movie-form',
    templateUrl: './movie-form.component.html',
    styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

    errors: string = '';
    isLoading: boolean = false;

    constructor(private movieService: MovieService) { }

    @Output()
    movieAdded: EventEmitter<Movie> = new EventEmitter<Movie>();

    ngOnInit() {
    }

    addMovie(title) {
        this.isLoading = true;
        this.movieService
            .addMovie({
                title: title
            })
            .subscribe(
                movie => {
                    this.isLoading = false;
                    movie.isUpdating = false;
                    this.movieAdded.emit(movie);
                },
                error => {
                    this.errors = error.json().errors;
                    this.isLoading = false;
                }
            );
    }

}
