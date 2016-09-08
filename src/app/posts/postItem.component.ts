import { Component ,Input } from '@angular/core';
@Component({
  selector: 'postItem',
  templateUrl: './postItem.component.html'
})
export class PostItemComponent {
	@Input() title = 'Title Is Loading...';
	@Input() excerpt = 'Excerpt Is Loading...';
}
