import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = "http://localhost:3001"
  constructor(private http:HttpClient) { }

  getAllRecipeApi(){
    return this.http.get(`${this.server_url}/all-recipes`)
  }

}
