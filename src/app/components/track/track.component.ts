import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() track: SpotifyApi.TrackObjectSimplified;
  @Output() result = new EventEmitter<boolean>();
  @ViewChild('songInput') inputElement: ElementRef<HTMLInputElement>;

  input: string;
  audio: HTMLAudioElement;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.input = '';
    this.audio = new Audio(this.track.preview_url);
    this.audio.oncanplay = () => this.audio.play();
    // this.audio.ontimeupdate = () => {
    //   if (this.audio.currentTime > 5) {
    //     this.audio.pause();
    //   }
    // };
  }

  get trackNames() {
    return this.gameService.trackNames.filter(name => name.toLowerCase().indexOf(this.input.toLowerCase()) !== -1);
  }

  submit() {
    if (this.gameService.trackNames.indexOf(this.input) === -1) {
      console.error('Not a valid song name');
    }

    else if (this.input !== this.track.name) {
      this.audio.pause();
      this.result.next(false);
    }

    else {
      this.audio.pause();
      this.result.next(true);
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.audio.pause();
    this.inputElement.nativeElement.focus();
  }
}
