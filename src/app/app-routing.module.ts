import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FavoriteComponent } from './favorite/favorite.component';
import {  AuthGuard} from './shared/guards/guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotloggedGuard } from './shared/guards/not-logged.guard';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
   component:RegisterComponent,
   canActivate:[NotloggedGuard]
  },
  {
    path:'login',
    component:LoginComponent,
  canActivate:[NotloggedGuard]

  },
  {
    path:'create',
    component:CreateComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'catalog',
    component:CatalogComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'edit/:id',
    component:EditComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'delete/:id',
    component:DeleteComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'logout',
    component:LogoutComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'favorite/:id',
    component:FavoriteComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'profile/:id',
    component:ProfileComponent,
    canActivate:[AuthGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
