import React from "react";
import ItemTable from "./ItemTable";
import { useState } from "react";

export default function Billing() {
  const [foodItem, setFoodItem] = useState({});
  const [carts, setCarts] = useState([]);
  const [extraOptipn, setExtraOption]= useState ({vat:0, discount :0})

  const foodItems = [
    { id: 101, name: "Sanduice", cost: 150, quentity: 1 },
    { id: 102, name: "Burger", cost: 450, quentity: 1 },
    { id: 103, name: "Pizza", cost: 500, quentity: 1 },
    { id: 104, name: "Popcorn", cost: 50, quentity: 1 },
    { id: 105, name: "Kabab", cost: 200, quentity: 1 },
    { id: 106, name: "Fried Chicken", cost: 300, quentity: 1 },
    { id: 107, name: "Soda", cost: 100, quentity: 1 },
    { id: 108, name: "Ice Crram", cost: 80, quentity: 1 },
    { id: 109, name: "Tea", cost: 20, quentity: 1 },
  ];

  const handelSelect = ({ target }) => {
    let selectFood = foodItems.find((item) => item.id === Number(target.value));
    setFoodItem(selectFood);   
  };  


  const handelAdd = () =>{
    if (foodItem && ! carts.find (item => item.id == foodItem.id)){
      setCarts([...carts, foodItem])
    } else {
        let filter = carts.map (item => {
          if(item.id== foodItem.id){
              item.quentity+=1
            }
          return item
          })
        setCarts(filter)
    };
  };

  const handelChange = (type, index) => {
    let newCarts = [...carts];
    if (type === "increment") {
      newCarts[index].quentity++;
    } else if (type === "decrement" && newCarts[index].quentity > 1) {
      newCarts[index].quentity--;
    } else if (type === "remove") {
      newCarts = carts.filter((item, idx) => index !== idx);
    }
    setCarts(newCarts);
  };

  const handelUpdate = (type, target, index) => {
    let costUpdate = [...carts];
    if (type == "cost"){costUpdate [index].cost = target.value}
     costUpdate [index].quentity = target.value
    setCarts(costUpdate);
  };

  let totalCost = 0 ;
   carts.forEach( item => totalCost += (item.cost * item.quentity));
   let paidCost =totalCost+(totalCost/100)*(extraOptipn.vat-extraOptipn.discount)
  
  return (
    <div className="container">
      <div className="row mt-5 d-flex  justify-content-center align-items-center">
        <div className="col-lg-8 shadow-lg bg-body rounded border border-primary border-2 py-3">
          <div className="row">
            <div className="col-5">
              <label className="form-label fs-5 text-muted" htmlFor="item">
                Select Fast Food Item
                <i className="bi bi-check2-circle px-2"></i>
              </label>
              <select
                className="form-select border-1 border-danger shadow-none fs-5"
                id="item"
                name="test"
                onChange={handelSelect}
              >
                <option value="0">Select</option>
                {foodItems.map((item) => (
                  <option 
                    key={item.id} 
                    value={item.id}>
                      {item.name}
                  </option>
                ))}
              </select>
              <button
                className="mt-2 btn btn-primary px-4 py-2 fs-4"
                disabled={!foodItem.id}
                onClick={handelAdd}
              >
                Add card
              </button>
            </div>
          </div>

          <table className="table mt-4">

            <thead>
              <tr className="fs-5">
                <th >No</th>
                <th > Food Name </th>
                <th > Cost </th>
                <th >Quntity</th>
                <th >Total</th>
              </tr>
            </thead>

            <tbody >
              {carts.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>{item.name}</td>

                  <td>
                    <input 
                      type="text"
                      className="form-control  border border-nune border-none shadwo-none"
                      style={{width: "100px"}}
                      value={item.cost} 
                      onChange={({target}) => handelUpdate ( "cost", target, index)}
                    />
                  </td>

                  <td style={{width:"200px"}}>
                    <button
                      className=" btn badge rounded-circle bg-danger"
                      onClick={() => handelChange("decrement", index)}
                    >
                      -
                    </button>

                      <input type="text"
                      className="mx-2 mx-lg-3 form-control d-inline"
                      value={item.quentity} 
                      style={{width: '50%'}}
                      onChange={({target}) => handelUpdate ( "quentity", target, index)}
                      />
                    
                    <button
                      className=" btn badge rounded-circle bg-success"
                      onClick={() => handelChange("increment", index)}  
                    >
                      +
                    </button>
                  </td>

                  <td>
                    <span>{item.cost * item.quentity}$</span>
                  </td>

                  <td>
                    <button
                      className="btn text-danger text-align-center badge fs-3"
                      onClick={() => handelChange("remove", index)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <td>Total Item : {carts.length}</td>
              <td></td>
              <td></td>
              <td 
              className="float-end me-4">
                 Total Cost
              </td>
              <td> =  { totalCost }</td>
            </tfoot>
          </table>

          <div className="col-lg-5  float-end">
            <div className="input-group ms-3 px-4 my-2">
              <label 
                htmlFor=" vat " 
                className="input-group-text bg-body border-none">
                  Vat =
              </label>
              <input
               className="form-control"
               type="number"
               placeholder="Vat"
               id="vat"
               onChange={ ({target})=> setExtraOption ( {...extraOptipn,[target.id]:target.value})}
               />
              <span 
               className="input-group-text">
                { extraOptipn.vat || 0 } %
              </span>
            </div>
            
            <div class="input-group flex-nowrap">
              <label 
               className="input-group-text bg-body"
               htmlFor=" discount "
               > 
                Discount =
              </label>
              <input
               type="number" 
               placeholder="Discount"
               id="discount"
               onChange={( {target})=> setExtraOption ( {...extraOptipn,[target.id]:target.value})}
               />
              <span
               className="input-group-text">
                {extraOptipn.discount || 0 }%
              </span>
            </div>
           
            <hr />

            <span>Paid Ammount = </span>
            <input 
            type="text" 
            value={paidCost}/>
          </div>
        </div>
      </div>
    </div>
  );
}
