import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-data-binding-component',
  templateUrl: './data-binding-component.component.html',
  styleUrls: ['./data-binding-component.component.css']
})
export class DataBindingComponentComponent implements OnInit {
  @Output() changed = new EventEmitter<String>();
  @Input() input: string;
  title = "This is string interpolation";
  value1 = "one-way";
  color = "red";
  link = "http://www.google.com";
  value2 = 5;
  value3 = 7;
  result;
  Movies = ["X-men", "Spiderman", "Antman", "Glueman"];
  movie_selected;
  jsonobj = { name: "Tarun", state: "VIC", postcode: "3125" };
  istrube = false;
  condition = true;
  grabbed_value;
  color1;
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.result = this.value2 + this.value3;

  }
  set_values(val1, val2) {
    this.value2 = val1;
    this.value3 = val2;
  }
  selectedMovie(movie) {
    this.movie_selected = movie;
    this.changed.emit(movie);
  }

  calling_directly_from_parent() {
    console.log("this example method is directly called from the parent component");
  }
}
