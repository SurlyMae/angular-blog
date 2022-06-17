import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '@libs/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Tour of Heroes';

  hello$ = this.http.get<Post>('/api/hello');
}
