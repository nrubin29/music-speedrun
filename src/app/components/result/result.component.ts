import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() correct: boolean;
  @Output() next = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
}
