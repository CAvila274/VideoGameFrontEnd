import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common'; 


interface GameTitle {
  game: string;
  releasedDate: string;
  currentPlayers: number;
  summary: string;
}

interface GameConsole {
  id: number;
  name: string;
  releaseDate: string;
  companyId: number;
  isChecked: boolean;
}

interface GameCompanies{
  id: number;
  name: string | null;
  foundedDate: Date;
}

interface VideoGame{
  id: number;
  name: string | null;
  releaseDate: Date;
  consoleId: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public gameTitle: GameTitle[] = [];
  public gameConsole: GameConsole[] = [];
  public gameCompanies: GameCompanies[] = []; 
  public videoGames: VideoGame[] = [];


  christian = ""
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGameTitle();
    this.getGameConsole();
    this.getGameCompanies();
    this.getVideoGames();
  }

  getGameTitle() {
    this.http.get<GameTitle[]>('http://localhost:5172/GameTitle').subscribe(
      (result) => {
        this.gameTitle = result;
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
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getGameCompanies() {
    this.http.get<GameCompanies[]>(`http://localhost:5172/api/GameCompanies/get`).subscribe(
      (result: GameCompanies[]) => { // Explicitly type the result
        this.gameCompanies = result; // Assign to gameConsoles
      },
      (error) => {
        console.error('Error fetching game companies:', error);
      }
    );
  }

  getVideoGames() {
    this.http.get<VideoGame[]>(`http://localhost:5172/api/VideoGames/get`).subscribe(
      (result: VideoGame[]) => { // Explicitly type the result
        this.videoGames = result; // Assign to gameConsoles
      },
      (error) => {
        console.error('Error fetching video games:', error);
      }
    );
  }
 
  title = 'angularcomp584.client';
}

