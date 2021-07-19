import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/product/product.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  baseUrl = "http://localhost:3001/products"

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
}
