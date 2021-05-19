import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // text and color as passed in props from the header html
  @Input() text: string;
  @Input() color: string;

  // Run a custom event
  @Output() btnClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }
  // Run the custom event
  onClick() {
    this.btnClick.emit();
  }
}
