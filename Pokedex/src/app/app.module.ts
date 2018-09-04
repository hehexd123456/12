import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPokemonsComponent } from './all-pokemons/all-pokemons.component';
import { CatchedPokemonsComponent } from './catched-pokemons/catched-pokemons.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonsService } from './pokemons.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './user.service';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'all-pokemons', component: AllPokemonsComponent, },
  { path: 'catched-pokemons', component: CatchedPokemonsComponent, },
  { path: 'all-pokemons/:id', component: PokemonComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: SignupComponent, },
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PokemonsService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
