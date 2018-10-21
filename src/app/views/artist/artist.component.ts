import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artistName: string;
  artists: SpotifyApi.ArtistObjectFull[];

  constructor(private spotifyService: SpotifyService, private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.artistName = 'mae';
  }

  async search() {
    this.artists = (await this.spotifyService.spotify.searchArtists(this.artistName)).artists.items;
  }

  select(artist: SpotifyApi.ArtistObjectFull) {
    this.gameService.artist = artist;
    this.router.navigate(['/albums']);
  }
}
