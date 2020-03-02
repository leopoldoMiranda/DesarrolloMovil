import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})

export class DivisaComponent implements OnInit {
  dlls;
  pesosInput;
  
  onConversion(value){
    this.dlls = value/18;
    console.log("resultado " + this.dlls);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
