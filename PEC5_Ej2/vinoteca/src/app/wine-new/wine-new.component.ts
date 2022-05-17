import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WineList } from '../wines';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.sass'],
  
})
export class WineNewComponent  {

  public wine: WineList;


  constructor( ) {
    this.wine = new WineList('', '', 0, false, 0, []);
  }

  setWinePrice(price: number){
    this.wine.price = price;
  }

  createWine(wineForm:any){
    console.log('creating wine', wineForm);
    if(wineForm.valid){
      console.log('wineForm is valid and was created', this.wine);
    } else{
      console.log('wineForm is not valid');
    }
  }



   }

 
 


