import React from "react";
import ItemTabil from './ItemTable'
import { useState } from "react";

export default function Billing() {

  // State..
  const [value,setValue]=useState([]);

  const Sandwich={value:"sanduice", id:101, cost:150 ,quentity:1};
  const Burger={value:"Burger", id:102, cost:450 ,quentity:1};
  const Pizza={value:"Pizza", id:103, cost:500 ,quentity:1};
  const Popcorn={value:"Popcorn", id:104, cost:50 ,quentity:1 };
  const Kabab={value:"Kabab", id:105, cost:200 ,quentity:1};
  const FriedChicken={value:"Fried Chicken", id:106, cost:300 ,quentity:1};
  const Soda={value:"Soda", id:107, cost:100  ,quentity:1};
  const IceCrram={value:"Ice Crram", id:108, cost:80 ,quentity:1};
  const Tea={value:"Tea", id:109, cost:20 ,quentity:1};

  
//  HandalSelect

  let rabby =null

  const handalSelect = ({target}) => 
  {
   rabby = target.value;
  }

  // handalAdd

  const handalAdd = () => {
    setValue(rabby)
    console.log(rabby);
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
                onChange={handalSelect}>
                    <option  className="text-muted fs-7"> choose.....   </option>
                    <option value={Sandwich}>Sandwich</option>
                    <option value={Burger}>Burger</option>
                    <option value={Pizza}>Pizza</option>
                    <option value={Popcorn}>Popcorn</option>
                    <option value={Kabab}>Kabab</option>
                    <option value={FriedChicken}>Fried Chicken</option>
                    <option value={Soda}>Soda</option>
                    <option value={IceCrram}>Ice Crram</option>
                    <option value={Tea}>Tea</option>
             </select>
             <button 
              className="mt-2 btn btn-primary px-4 py-2 fs-4"
              onClick={handalAdd}
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
