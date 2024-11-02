import { Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { GameConsoleComponent } from './gameconsole/gameconsole.component';
import { WeatherComponent } from './weather/weather.component';
import { CountryPopulationComponent } from './country/country-population.component';

export const routes: Routes = [
    {path: "countries", component: CountryComponent},
    {path: "gameconsoles", component: GameConsoleComponent},
    {path: "countrypopulation/:id", component: CountryPopulationComponent},
    {path: "", component: WeatherComponent, pathMatch: "full"}
];
