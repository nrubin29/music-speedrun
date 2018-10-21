import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements CanActivate {
  constructor(private spotifyService: SpotifyService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const auth = !this.spotifyService.isAuthenticated();

    if (!auth) {
      this.router.navigate(['/artist']);
    }

    return auth;
  }
}
