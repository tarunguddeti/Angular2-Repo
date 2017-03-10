import { Component, ViewChild } from '@angular/core';
import { DataBindingComponentComponent } from './data-binding-component/data-binding-component.component';
@Component({
  selector: 'app-root',
  template: `{{title}}
  <app-data-binding-component (changed)="get_movie($event)" [input]=movie_got></app-data-binding-component>
  <p>Movie got from child component is (this is in parent component) : {{movie_got}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DataBindingComponentComponent) child_component: DataBindingComponentComponent;
  title = 'Parent Component! ';
  movie_got;
  onInit() {
  }
  get_movie(movie) {
    this.movie_got = movie;
    console.log(movie);
    this.child_component.calling_directly_from_parent();
    this.child_component.set_values(this.movie_got, this.movie_got);
  }


}

