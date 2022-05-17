import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WineList } from '../wines';


@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.sass']
})
export class FormCreatorComponent {

  private wine: WineList;
  public wineForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
    this.wine = new WineList('', '', 0, false, 0, []);
  }
  
  createForm() {
    this.wineForm = this.fb.group({
      name: new FormControl(null, Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    imageUrl: new FormControl(null, Validators.required),
    isOnSale: new FormControl(''),
    });
  }
  get name() { return this.wineForm.get('name'); }

  get price() { return this.wineForm.get('price'); }

  get code() { return this.wineForm.get('imageUrl'); }


  onSubmit() {
    console.log('Wine form Value', this.wineForm.value);
  }
  
}
