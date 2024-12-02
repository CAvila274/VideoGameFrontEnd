import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { GameConsole } from '../gameconsole.types';

@Component({
  selector: 'gameconsole-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
})

export class FormComponent {
  gameConsoleForm = new FormGroup({
    gameConsole: new FormControl('',[Validators.required]),
    releasedDate: new FormControl('',[Validators.required]),
    companyId: new FormControl('',[Validators.required]),
    isChecked: new FormControl(false,[Validators.required]),
    consoleType: new FormControl('',[Validators.required])
  });  

  constructor(private http: HttpClient) {
    
  }

  get gameConsole() {
    return this.gameConsoleForm.get('gameConsole');
  }

  get releasedDate() {
    return this.gameConsoleForm.get('releasedDate');
  }

  get companyId() {
    return this.gameConsoleForm.get('companyId');
  }

  get isChecked() {
    return this.gameConsoleForm.get('isChecked');
  }

  get consoleType() {
    return this.gameConsoleForm.get('consoleType');
  }

  onSubmit() {
    if (this.gameConsoleForm.invalid) {
      this.gameConsoleForm.markAllAsTouched(); 
      return;
    }
    this.save();
  }

   
  save(){
    let newGameConsole: GameConsole = 
    {
      id: 0,
      name: this.gameConsoleForm.value.gameConsole as string,
      releaseDate: new Date(this.gameConsoleForm.value.releasedDate as string),
      companyId: !isNaN(parseInt(this.gameConsoleForm.value.companyId as string)) ? parseInt(this.gameConsoleForm.value.companyId as string) : 0,
      isChecked: this.gameConsoleForm.value.isChecked as boolean ,
      consoleType: this.gameConsoleForm.value.consoleType as string,
    }


    this.http.post<GameConsole>(`${environment.baseUrl}api/GameConsole`, newGameConsole).subscribe(
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

  checkBox(value: Event){
    console.log(value);
  }

  
  test(value: string) {
    // d
  }

}
