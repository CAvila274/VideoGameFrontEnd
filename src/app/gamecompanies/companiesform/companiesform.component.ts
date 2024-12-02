import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { GameCompanies } from '../gamecompanies.type';

@Component({
  selector: 'companies-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './companiesform.component.html',
})

export class CompaniesComponent {
  gameCompaniesForm = new FormGroup({
    gameCompanies: new FormControl('', [Validators.required]),
    foundedDate: new FormControl('', [Validators.required]),
  });  
  generatedId: number | null = null;

  constructor(private http: HttpClient) {
    
  }

  get gameCompanies() {
    return this.gameCompaniesForm.get('gameCompanies');
  }
  
  get foundedDate() {
    return this.gameCompaniesForm.get('foundedDate');
  }

  onSubmit() {
    if (this.gameCompaniesForm.invalid) {
      this.gameCompaniesForm.markAllAsTouched(); 
      return;
    }
    this.save();
  }

  
  save(){
    let newGameCompanies: GameCompanies = 
    {
      name: this.gameCompaniesForm.value.gameCompanies as string,
      foundedDate: new Date(this.gameCompaniesForm.value.foundedDate as string),
      
    }

    this.http.post<GameCompanies>(`${environment.baseUrl}api/GameCompanies`, newGameCompanies).subscribe(
      {
        next: (response: any) => {
          console.log(response.id)
          this.generatedId = response.id;
          // { id: 0 }
        },
        error: (err) => {
          console.log("Error in the server: " + err)
        }
      }
    )
  }

}
