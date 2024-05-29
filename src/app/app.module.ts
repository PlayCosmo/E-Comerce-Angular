import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors, HttpInterceptorFn, HttpClient } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterSidebarComponent } from './filter-sidebar/filter-sidebar.component';
import { RegisterComponent } from './register/register.component';
import {MatTabsModule} from '@angular/material/tabs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoaderComponent } from './loader/loader.component';
import { InterceptService } from './intercept.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalSpaceComponent } from './personal-space/personal-space.component';
import { UserInterceptorService } from './user-interceptor.service';
import {  AuthInterceptor} from './custom.interceptor';
import { LogoComponent } from './logo/logo.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    CartComponent,
    AboutusComponent,
    FooterComponent,
    ProductDetailsComponent,
    FilterSidebarComponent,
    RegisterComponent,
    StarRatingComponent,
    LoaderComponent,
    NotFoundComponent,
    PersonalSpaceComponent,
    LogoComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule

   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    provideClientHydration(),
    provideAnimationsAsync(),
    // provideHttpClient(withInterceptors([customInterceptor]))
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

