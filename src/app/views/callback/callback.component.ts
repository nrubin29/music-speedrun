import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      const data = new URLSearchParams(fragment);
      this.spotifyService.setToken(data.get('access_token'), parseInt(data.get('expires_in')));
      this.router.navigate(['/artist']);
    });
  }

}
