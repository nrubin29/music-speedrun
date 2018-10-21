import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  artist: SpotifyApi.ArtistObjectFull;
  _albums: SpotifyApi.AlbumObjectFull[];
  tracks: SpotifyApi.TrackObjectSimplified[];
  trackNames: string[];

  constructor() { }

  get albums() {
    return this._albums;
  }

  set albums(albums: SpotifyApi.AlbumObjectFull[]) {
    this._albums = albums;
    this.tracks = [].concat(...albums.map(album => album.tracks.items));
    this.trackNames = this.tracks.map(track => track.name).sort();
  }
}
