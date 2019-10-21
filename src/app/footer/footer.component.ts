import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<h5> &copy; Zensar Online Shoppee</h5>
  <h6> All rights reserved</h6>`,
  styles: ['h5{background-color:blue;}',
  'h2{color:red;}']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
