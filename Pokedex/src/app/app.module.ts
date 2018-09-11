import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPokemonsComponent } from './components/all-pokemons/all-pokemons.component';
import { CatchedPokemonsComponent } from './components/catched-pokemons/catched-pokemons.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsService } from './pokemons.service';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserService } from './user.service';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './guards/auth.guard';
import { PlebGuard } from './guards/pleb.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'all-pokemons', component: AllPokemonsComponent, },
  { path: 'catched-pokemons', component: CatchedPokemonsComponent, canActivate: [AuthGuard] },
  { path: 'all-pokemons/:id', component: PokemonComponent, },
  { path: 'login', component: LoginComponent, canActivate: [PlebGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [PlebGuard] },
  { path: '**', component: PageNotFoundComponent, },
]

@NgModule({
  declarations: [
    AppComponent,
    AllPokemonsComponent,
    CatchedPokemonsComponent,
    LoginComponent,
    SignupComponent,
    PokemonComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PokemonsService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
