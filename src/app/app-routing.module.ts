import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './views/artist/artist.component';
import { AlbumsComponent } from './views/albums/albums.component';
import { GameComponent } from './views/game/game.component';
import { HomeComponent } from './views/home/home.component';
import { CallbackComponent } from './views/callback/callback.component';
import { NoauthGuard } from './guards/noauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AlbumsResolve } from './resolve/albums.resolve';
import { EndComponent } from './views/end/end.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [NoauthGuard]},
  {path: 'callback', component: CallbackComponent, canActivate: [NoauthGuard]},
  {path: 'artist', component: ArtistComponent, canActivate: [AuthGuard]},
  {path: 'albums', component: AlbumsComponent, canActivate: [AuthGuard], resolve: {albums: AlbumsResolve}},
  {path: 'game', component: GameComponent, canActivate: [AuthGuard]},
  {path: 'end', component: EndComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
