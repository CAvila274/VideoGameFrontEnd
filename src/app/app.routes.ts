import { Routes } from '@angular/router';
import { GameConsoleComponent } from './gameconsole/gameconsole.component';
import { GameTitleComponent } from './gametitle/gametitle.component';
import { VideoGameComponent } from './videogame/videogame.component';
import { GameCompaniesComponent } from './gamecompanies/gamecompanies.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
    
    {path: "login", component: LoginComponent},
    {path: "gamecompanies", component: GameCompaniesComponent},
    {path: "gameconsoles", component: GameConsoleComponent},
    {path: "videogame", component: VideoGameComponent},
    {path: "", component: GameTitleComponent, pathMatch: "full"}
];
