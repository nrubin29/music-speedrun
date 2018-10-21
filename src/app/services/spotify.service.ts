import { Injectable } from '@angular/core';
import { SpotifyWebApiJs } from 'spotify-web-api-js';
import * as SpotifyWebApi from 'spotify-web-api-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public spotify: SpotifyWebApiJs;

  constructor() {
    this.spotify = new SpotifyWebApi();

    if (this.accessToken) {
      this.spotify.setAccessToken(this.accessToken);
    }
  }

  authenticate() {
    const args = {
      'client_id': environment.clientId,
      'response_type': 'token',
      'redirect_uri': encodeURIComponent(environment.baseUrl) + '/callback',
      // TODO: state
    };

    location.href = 'https://accounts.spotify.com/authorize?' + Object.keys(args).map(key => key + '=' + args[key]).join('&');
  }

  get accessToken() {
    return localStorage.getItem('access_token');
  }


  get expires() {
    return new Date(parseInt(localStorage.getItem('expires')));
  }

  isAuthenticated() {
    return localStorage.getItem('access_token') && new Date().getTime() < this.expires.getTime();
  }

  setToken(token: string, expiresIn: number) {
    this.spotify.setAccessToken(token);
    localStorage.setItem('access_token', token);
    localStorage.setItem('expires', new Date().setSeconds(new Date().getSeconds() + expiresIn).toString());
  }
}
