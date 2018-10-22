import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const obs = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    obs.subscribe((res) => {
      console.log(`this is the res response: ${res}`);
    });
  }
}
