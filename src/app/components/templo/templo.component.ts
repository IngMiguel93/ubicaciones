import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'templo',
  templateUrl: './templo.component.html',
  styleUrls: ['./templo.component.css']
})
export class TemploComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = "https://maps.app.goo.gl/Pm2zjAUXZ9hxuz5A7?g_st=ic";
  }

}
