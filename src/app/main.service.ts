import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  constructor() { }

//add new item for the array
  new_item = {
    grade_component : '',
    grade : null,
    weight : null
  }

  //array of items
  items = []

  //final result for user

  add_c()
  {
    //add new item to the array
    this.items.push(this.new_item)
    //clean memory
    this.new_item = {
      grade_component : '',
      grade: null,
      weight : null
    }

  
    //just debugging..
    console.log("item added! new array is: ", this.items)
    this.calc_now();
  }

  show_rst()
  {
    alert("הציון הסופי: "+this.calc_now())
  }

  calc_now()
  {
    let rst = 0
    for(let i=0; i<this.items.length; i++)
    {
      rst += (this.items[i].grade*this.items[i].weight) / 100;
    }
    return rst;
  }

  //function for delete item
  del_g(id)
  {
    console.log("del_g function called!")
    this.items.splice(id,1);
    console.log("items: ", this.items)
  }


}