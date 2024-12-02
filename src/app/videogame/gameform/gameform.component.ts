import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { VideoGame } from '../videogame.type';

@Component({
  selector: 'videogame-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gameform.component.html',
})

export class GameFormComponent {
  videoGameForm = new FormGroup({
    videoGame: new FormControl('',[Validators.required]),
    releaseDate: new FormControl('',[Validators.required]),
    consoleId: new FormControl('',[Validators.required]),
  });  

  constructor(private http: HttpClient) {}

  get videoGame() {
    return this.videoGameForm.get('videoGame');
  }

  get releaseDate() {
    return this.videoGameForm.get('releaseDate');
  }

  get consoleId() {
    return this.videoGameForm.get('consoleId');
  }

  

  onSubmit() {
    if (this.videoGameForm.invalid) {
      this.videoGameForm.markAllAsTouched(); 
      return;
    }
    this.save();
  }

   
  save(){
    let newVideoGame: VideoGame = 
    {
      id: 0,
      name: this.videoGameForm.value.videoGame as string,
      releaseDate: new Date(this.videoGameForm.value.releaseDate as string),
      consoleId: !isNaN(parseInt(this.videoGameForm.value.consoleId as string)) ? parseInt(this.videoGameForm.value.consoleId as string) : 0,
      
    }

    this.http.post<VideoGame>(`${environment.baseUrl}api/VideoGames`, newVideoGame).subscribe(
      {
        next: (response: any) => {
          console.log(response)
          // { id: 0 }
        },
        error: (err) => {
          console.log("Error in the server: " + err)
        }
      }
    )
  }

}
