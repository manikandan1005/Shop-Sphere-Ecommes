import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotoComponent } from './noto/noto.component';
import { ShirtComponent } from './shirt/shirt.component';
import { TShirtComponent } from './t-shirt/t-shirt.component';
import { FullSleeveComponent } from './full-sleeve/full-sleeve.component';
import { WatchComponent } from '../products/watch/watch.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',component:HomePageComponent,children:[
            {path:'shirt',component:ShirtComponent},
            {path:'T-Shirt',component:TShirtComponent},
            {path:'Full-sleeve',component:FullSleeveComponent},
            {path:'Watch',component:WatchComponent}
        ]
    },
    {
        path:'not',component:NotoComponent
    },
   
];
