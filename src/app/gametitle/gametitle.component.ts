import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';

interface GameTitle {
  game: string;
  releasedDate: string;
  currentPlayers: number;
  summary: string;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './gametitle.component.html',
  styleUrl: './gametitle.component.scss'
})
export class GameTitleComponent implements OnInit{
  public gameTitle: GameTitle[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGameTitle();
  }

  getGameTitle() {
    this.http.get<GameTitle[]>(`${environment.baseUrl}GameTitle`).subscribe(
      (result) => {
        this.gameTitle = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'angularcomp584.client';
}
