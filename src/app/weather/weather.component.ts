import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';

interface WeatherForecast {
  game: string;
  releasedDate: string;
  currentPlayers: number;
  summary: string;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit{
  public forcasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>(`${environment.baseUrl}WeatherForecast`).subscribe(
      (result) => {
        this.forcasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'angularcomp584.client';
}
