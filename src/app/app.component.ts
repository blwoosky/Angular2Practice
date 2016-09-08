import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { PostListComponent } from './posts/postList.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [PostListComponent]
})
export class AppComponent { }
