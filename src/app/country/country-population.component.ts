import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { Country } from './country';
import { CountryPopulation } from './CountryPopulation';

@Component({
  selector: 'app-country-population',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent implements OnInit{
  id:number = -1;
  public CountryPopulation!: CountryPopulation;
  constructor(private http: HttpClient, private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    let id_Param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id_Param? + id_Param : -1;
    this.http.get<CountryPopulation>(`${environment.baseUrl}api/Countries/countrypopulation/1/${this.id}`).subscribe(
      {
        next: result => this.CountryPopulation = result,
        error: e => console.error(e)
    }
  );

  }
}
