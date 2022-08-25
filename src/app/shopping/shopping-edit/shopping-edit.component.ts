import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridients } from 'src/app/shared/ingridient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInputRef!: ElementRef;

  @ViewChild('amountInput')
  amountInputRef!: ElementRef;

  constructor(private sService:ShoppingService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const nameV = this.nameInputRef.nativeElement.value;
    const amountV = this.amountInputRef.nativeElement.value;
    const ing = new Ingridients(nameV, amountV);
    this.sService.addIngredients(ing);
  }
}
