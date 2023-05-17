import { FlexLayoutModule } from '@angular/flex-layout';
import { PostsComponent } from './../../modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { DashbordComponent } from './../../modules/dashbord/dashbord.component';
import { DefultComponent } from './defult.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule } from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule } from '@angular/material/card';
import { DashbordService } from 'src/app/modules/dashbord.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    DefultComponent,
    DashbordComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers:[
    DashbordService
  ]
})
export class DefultModule { }
