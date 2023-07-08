import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdx8FqiHBx7BQyjKryXxOMTiZGsCaN9IUelwzRauvIPhd4XpQ/viewform";
  }

}
