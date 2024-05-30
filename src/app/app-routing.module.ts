import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalSpaceComponent } from './personal-space/personal-space.component';
import { guardGuard } from './guard.guard';
import { cartGuard } from './cart.guard';

export const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutusComponent},
  {path:"cart", component:CartComponent, canActivate:[cartGuard]},
  {path:"login", component:LoginComponent},
  {path:"details", component:ProductDetailsComponent},
  {path:"register", component:RegisterComponent},
  {path:"personal", component:PersonalSpaceComponent, canActivate:[guardGuard]},


  
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
