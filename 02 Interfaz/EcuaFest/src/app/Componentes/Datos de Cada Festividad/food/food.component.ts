import { Component, OnInit } from '@angular/core';
import {FoodService} from "../../../Servicios/food.service";
import {ActivatedRoute} from "@angular/router";
import {FoodClass} from "../../../Clases/FoodClass";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  comidas:FoodClass[]=[];
  constructor(private _FoodServicio:FoodService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let params: any = this._activatedRoute.snapshot.params;
    this._FoodServicio.presentarFoodPorFest(params.idFestividadDeFood)
      .subscribe(
        (foods:FoodClass[])=>{
          this.comidas=foods.map(
            (food:FoodClass)=>{
              console.log("ddd");
              food.editar=false;
              console.log("consulta "+food);
              return food;
            }
          );
        },
        error =>{
          console.log("Error de presentación",error)
        } );
  }

}
