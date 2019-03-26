import { Component, OnInit } from '@angular/core';
import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies = [];

  constructor(private mDBService: MoviedbService) { }

  //metodo é executado quando se entra na pagina
  ngOnInit() {
    this.topRatedMovies()
  }



  topRatedMovies(){
    this.mDBService.getTopRatedMovies().subscribe(
      data=>{
        //pega a resposta
        let resposta = (data as any)._body;
        //converte pata obj JSON
        resposta = JSON.parse(resposta); 
        //atribui a resposta ao array de filmes
        this.movies = resposta;
      },
      error=>{
        console.log(error);
      }
    ).add();
  }
}
