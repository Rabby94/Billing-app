import React from "react";
import ItemTabil from './ItemTable'
import { useState } from "react";

export default function Billing() {

  // State..
  const [foodItem, setFoodItem] = useState({});
  const [carts, setCarts] = useState([]);

  const foodItems = [
    { id: 101, name: "Sanduice", cost: 150, quentity: 1 },
    { id: 102, name: "Burger",  cost: 450, quentity: 1 },
    { id: 103, name: "Pizza", cost: 500, quentity: 1 },
    { id: 104, name: "Popcorn", cost: 50, quentity: 1 },
    { id: 105, name: "Kabab", cost: 200, quentity: 1 },
    { id: 106, name: "Fried Chicken", cost: 300, quentity: 1 },
    { id: 107, name: "Soda", cost: 100, quentity: 1 },
    { id: 108, name: "Ice Crram", cost: 80, quentity: 1 },
    { id: 109, name: "Tea", cost: 20, quentity: 1 },
  ]
  
  // handalSelect
  const handalSelect=({target})=>{
     let selectFood= foodItems.find( item => item.id === Number(target.value) );
     setFoodItem(selectFood);
  }
 
  const handalAdd = ()=> {
    let itemList
    if (carts.includes(foodItem)){
    }
    else{
    itemList= [...carts ,foodItem]
    }
    setCarts(itemList);
  }

  return (
    <div className="container">
      <div className="row mt-5 d-flex  justify-content-center align-items-center">
        <div className="col-8 shadow-lg bg-body rounded border border-primary border-2 py-3">

          <div className="row">
            <div className="col-5">
              <label 
                className="form-label fs-5 text-muted" 
                htmlFor="item">
                 Select Fast Food Item
                 <i className="bi bi-check2-circle px-2"></i>
              </label>
              <select 
                className="form-select border-1 border-danger shadow-none fs-5"
                id="item"
                name="test"
                onChange={handalSelect}
                >
                  {foodItems.map(item =>
                    <option key={item.id} value={item.id}>{item.name}</option>
                  )}
             </select>
             <button 
              className="mt-2 btn btn-primary px-4 py-2 fs-4"
              onClick={handalAdd}
              >Add card
            </button>
            </div>
          </div>
            {
            carts.length ? <ItemTabil carts={carts}  setCarts = {setCarts} /> :null
            }
        </div>
      </div>
    </div>
  );

}
