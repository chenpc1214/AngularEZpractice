import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  @ViewChild('NameInput') ItemName:ElementRef;
  @ViewChild('AmountInput') ItemAmount:ElementRef;
  @Output() ingredientAdd = new EventEmitter<Ingredient>();

  constructor() { }

  AddItem(){
    
    const IngredientName = this.ItemName.nativeElement.value
    const IngredientAmount = this.ItemAmount.nativeElement.value
    const NewIngredient = new Ingredient(IngredientName,IngredientAmount);
    this.ingredientAdd.emit(NewIngredient);

  }

  ngOnInit() {
  }

}
