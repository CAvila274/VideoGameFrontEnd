import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormComponent } from './form/form.component';
import { GameConsole } from './gameconsole.types';


@Component({
  selector: 'app-gameconsole',
  standalone: true,
  imports: [DatePipe, CommonModule, FormComponent],
  templateUrl: './gameconsole.component.html',
})

export class GameConsoleComponent implements OnInit{
  public gameConsoles: GameConsole[] = []; 
  public isLoading: boolean = true;
  public jon: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGameConsoles();
    this.whatever();
  }


  getGameConsoles() {
    this.http.get<GameConsole[]>(`${environment.baseUrl}api/GameConsole/get`).subscribe(
      (result: GameConsole[]) => {
        console.log(result); 
        this.gameConsoles = result; 
        this.isLoading = false; 
      },
      (error) => {
        console.error('Error fetching game consoles:', error);
        this.isLoading = false; 
      }
    );
  }

  whatever() {
    let temp = 4;
    temp = temp + 5;
    // any
    // number
    // string
    // boolean
    // { }
    // { id: 0, name: "asdf"}
    // GameConsole
    this.http.get<any>(`${environment.baseUrl}api/GameConsole/whatever`).subscribe({
      next: (response: any) => {
        this.jon = response;
        debugger
      },
      error: (error) => {

      }
    });
  }

}

