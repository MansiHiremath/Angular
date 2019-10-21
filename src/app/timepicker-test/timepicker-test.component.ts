import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker-test',
  templateUrl: './timepicker-test.component.html',
  styleUrls: ['./timepicker-test.component.css']
})
export class TimepickerTestComponent implements OnInit {
time={hour:0,minute:0}
  constructor() { }

  ngOnInit() {
  }

}
