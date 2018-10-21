import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: SpotifyApi.AlbumObjectFull[];
  selectedAlbums: Set<number>;

  constructor(private spotifyService: SpotifyService, private gameService: GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.selectedAlbums = new Set<number>();

    this.route.data.subscribe(data => {
      this.albums = data.albums;
    });
  }

  toggle(index: number) {
    this.selectedAlbums.has(index) ? this.selectedAlbums.delete(index) : this.selectedAlbums.add(index);
  }

  next() {
    this.gameService.albums = Array.from(this.selectedAlbums).map(index => this.albums[index]);
    this.router.navigate(['/game']);
  }
}
