import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
interface IPost{
  id?:string,
  author?:string,
  title?:string,
  category?:string,
  data?:string
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
dataSource!:MatTableDataSource<IPost>;
posts!:IPost[];
displayedColumns:string[] = ['id', 'author', 'title', 'category','data']
@ViewChild(MatSort,{static:true}) sort!:MatSort;
constructor(){
  this.posts=[{
id: '1',
author:"islam hassan",
title:"First post",
category:"Uncategorized",
data:"2023-04-03 07:07"
  },{
    id: '2',
    author:"islam hassan",
    title:"Second post",
    category:"Uncategorized",
    data:"2023-04-03 07:07"
      },{
        id: '3',
        author:"islam hassan",
        title:"First post",
        category:"Uncategorized",
        data:"2023-04-03 07:07"
          }];
          this.dataSource=new MatTableDataSource(this.posts)
}
ngOnInit(){
this.dataSource.sort=this.sort;
}
}
