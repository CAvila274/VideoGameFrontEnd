import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';


interface GameConsole {
  id: number;
  name: string;
  releaseDate: string;
}

@Component({
  selector: 'app-gameconsole',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './gameconsole.component.html',
  styleUrl: './gameconsole.component.scss'
})
export class GameConsoleComponent implements OnInit{
  public gameConsoles: GameConsole[] = []; 
  public isLoading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGameConsoles();
  }

  getGameConsoles() {
    this.http.get<GameConsole[]>(`${environment.baseUrl}api/GameConsole/get`).subscribe(
      (result: GameConsole[]) => { // Explicitly type the result
        this.gameConsoles = result; // Assign to gameConsoles
        this.isLoading = false; // Stop loading
      },
      (error) => {
        console.error('Error fetching game consoles:', error);
        this.isLoading = false; // Stop loading even on error
      }
    );
  }

}

