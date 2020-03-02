import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.css']
})


export class MedidasComponent implements OnInit {
  
  mts;
  
  onConversion(value){
    
    this.mts = value/100;
    console.log("resultado: " + this.mts + "mts");
}
//---------------------------------------------------------
  constructor() { }

  ngOnInit(): void {

  }

}
