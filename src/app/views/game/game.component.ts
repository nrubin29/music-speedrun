import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import * as shuffle from 'shuffle-array';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  state: 'track' | 'result';
  correct: boolean;

  shuffledTracks: SpotifyApi.TrackObjectSimplified[];
  index: number;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.shuffledTracks = shuffle(this.gameService.tracks, {copy: true});
    this.index = 0;
    this.state = 'track';
  }

  get currentTrack() {
    return this.shuffledTracks[this.index];
  }

  result(correct: boolean) {
    this.correct = correct;
    this.state = 'result';
  }

  next() {
    if (++this.index >= this.shuffledTracks.length) {
      this.router.navigate(['/end']);
    }

    else {
      this.state = 'track';
    }
  }
}
