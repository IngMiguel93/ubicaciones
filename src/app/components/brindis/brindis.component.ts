import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brindis',
  templateUrl: './brindis.component.html',
  styleUrls: ['./brindis.component.css']
})
export class BrindisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = "https://maps.app.goo.gl/H4km8YE8X2cnGtpA9";
  }

}
