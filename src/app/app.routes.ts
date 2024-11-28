import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SiginComponent } from './components/auth/sigin/sigin.component';
import { TasklistComponent } from './components/task/tasklist/tasklist.component';

export const routes: Routes = [
   {path:'login',component:LoginComponent},
   {path:'sigin',component:SiginComponent},
   {path:'tasklist',component:TasklistComponent},
   {path:'',redirectTo:'/tasklist',pathMatch:'full'}
];
