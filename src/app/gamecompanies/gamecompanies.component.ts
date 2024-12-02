import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { CompaniesComponent } from './companiesform/companiesform.component';
import { GameCompanies } from './gamecompanies.type';


@Component({
  selector: 'app-gamecompanies',
  standalone: true,
  imports: [DatePipe, CommonModule, CompaniesComponent],
  templateUrl: './gamecompanies.component.html',
})

export class GameCompaniesComponent implements OnInit{
  public gameCompanies: GameCompanies[] = []; 
  public isLoading: boolean = true;
  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGameCompanies();
  }


  getGameCompanies() {
    this.http.get<GameCompanies[]>(`${environment.baseUrl}api/GameCompanies/get`).subscribe(
      (result: GameCompanies[]) => { // Explicitly type the result
        this.gameCompanies = result; // Assign to gameConsoles
        this.isLoading = false; // Stop loading
      },
      (error) => {
        console.error('Error fetching game companies:', error);
        this.isLoading = false; // Stop loading even on error
      }
    );
  }
}