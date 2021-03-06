import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component: HomeComponent},
  {path:'tema', component: TemaComponent},
  {path:'temaEdit/:id', component: TemaEditComponent},
  {path:'temaDelete/:id', component: TemaDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
