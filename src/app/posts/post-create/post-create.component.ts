import { PostsService } from './../../posts.service';
import { Post } from './../post.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent  = '';
  enteredTitle  = '';


  constructor(public postService: PostsService) {}

  onAddPost(form: NgForm) {

    if (form.invalid) {
      form.reset();
      return;
    }

    const newPost = new Post(null, form.value.title, form.value.content);
    this.postService.addPost(newPost);
    form.resetForm();
  }


}
