import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private URL_API:string = "https://api.themoviedb.org/3";
  private API_KEY:string = "562c9a0612f96db3f6fcb410ea34a9ef";
  
  constructor(private htpp: Http) { }

  //retorna a lista de top rateing movies
  getTopRatedMovies(){
  //retorna o resultado baseado na URL de requisição
    return this.htpp.get(`${this.URL_API}/movie/top_rated?api_key=${this.API_KEY}`)
  }
}
