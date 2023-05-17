import { PostsComponent } from './modules/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefultComponent } from './layouts/defult/defult.component';
import { DashbordComponent } from './modules/dashbord/dashbord.component';

const routes: Routes = [
  {path: '', component:DefultComponent,children:[{
    path: '', component:DashbordComponent
  },{path:'posts',component:PostsComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
