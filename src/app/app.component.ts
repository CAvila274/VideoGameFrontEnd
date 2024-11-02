import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common'; 


interface WeatherForecast {
  game: string;
  releasedDate: string;
  currentPlayers: number;
  summary: string;
}

interface GameConsole {
  id: number;
  name: string;
  releaseDate: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  public gameConsole: GameConsole[] = [];

  christian = ""
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
    this.getGameConsole();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('http://localhost:5172/WeatherForecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
 getGameConsole(){
    this.http.get<GameConsole>('http://localhost:5172/api/GameConsole/get').subscribe(
      (result) => {
        console.log(result.name) // Playstation
        this.christian = result.name
      },
      (error) => {
        console.error(error);
      }
    );
  }
 
  title = 'angularcomp584.client';
}

