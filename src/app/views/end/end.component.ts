import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startOver() {
    this.router.navigate(['/artist']);
  }
}
