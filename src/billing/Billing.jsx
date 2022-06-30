import React from "react";
import ItemTabil from './ItemTable'
import { useState } from "react";

export default function Billing() {

  // State..
  const [foodItem, setFoodItem] = useState({});

  const foodItems = [
    { id: 101, name: "sanduice", cost: 150, quentity:1 },
    {name:"Burger", id:102, cost:450 ,quentity:1},
    {name:"Pizza", id:103, cost:500 ,quentity:1},
    {name:"Popcorn", id:104, cost:50 ,quentity:1 },
    {name:"Kabab", id:105, cost:200 ,quentity:1},
    {name:"Fried Chicken", id:106, cost:300 ,quentity:1},
    {name:"Soda", id:107, cost:100  ,quentity:1},
    {name:"Ice Crram", id:108, cost:80 ,quentity:1},
    {name:"Tea", id:109, cost:20 ,quentity:1},
  ]

  
//  HandalSelect


  // handalAdd
  const HandleChange=({target})=>{
    console.log(target.value);
    let selectFood= foodItems.find(item => item.id === Number(target.value));
    setFoodItem(selectFood);
   
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
                onChange={HandleChange}
                >
                  {foodItems.map((item) =>
                    <option key={item.id} value={item.id}>{item.name}</option>
                  )}
             </select>
             <button 
              className="mt-2 btn btn-primary px-4 py-2 fs-4"
              // onClick={handalAdd}
              >Add card
            </button>
            </div>
          </div>
          <ItemTabil/>
        </div>
      </div>
    </div>
  );

}
