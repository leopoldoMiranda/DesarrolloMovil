import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {

  fahrenheit;

  onConversion(cInput){
    this.fahrenheit = (cInput  * 1.8) +32
    console.log("resultado = " + this.fahrenheit + "F"); 
  }


  constructor() { }

  ngOnInit(): void {
  }

}
