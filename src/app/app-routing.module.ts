import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { OwnerComponent } from './owner/owner.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog/:id', component: SinglePostComponent },
  { path: 'owner', component: OwnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
