import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { GameFormComponent } from './gameform/gameform.component';
import { VideoGame } from './videogame.type';


@Component({
  selector:'app-videogame',
  standalone: true,
  imports:[CommonModule, GameFormComponent],
  templateUrl:'./videogame.component.html',

})

export class VideoGameComponent implements OnInit{
  public videoGame: VideoGame[] = []; 
  public isLoading: boolean = true;


constructor(private http: HttpClient) {}

ngOnInit() {
  this.getVideoGames();
}



getVideoGames(){
  this.http.get<VideoGame[]>(`${environment.baseUrl}api/VideoGames/get`).subscribe(
    (result: VideoGame[]) => { 
      this.videoGame = result; 
      this.isLoading = false; 
    },
    (error) => {
      console.error('Error fetching video game:', error);
      this.isLoading = false; 
    }
  );
}
}

