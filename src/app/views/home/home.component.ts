import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  login() {
    this.spotifyService.authenticate();
  }
}
