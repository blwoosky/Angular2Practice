import { Component } from '@angular/core';
import { PostItemComponent } from './postItem.component';
import { PostService } from './post.service.ts';

@Component({
  selector: 'postList',
  templateUrl: './PostList.component.html',
  directives: [PostItemComponent],
  providers: [PostService]
})
export class PostListComponent {
	
	posts;

	constructor(postService : PostService){
		this.posts = postService.getPosts();
	}

}
