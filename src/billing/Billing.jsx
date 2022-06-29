import React from "react";
import { useState } from "react";

export default function Billing() {
    const [value,setValue]=useState()
  return (
    <div className="container">
      <div className="row mt-5  justify-content-center">
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
                className="form-select border-1 border-danger shadow-none  fs-5 text-danger"
                placeholder="dfkjdshkfjh"
                name="Item" 
                id="item">
                    <option  className="text-muted fs-7"> choose.....   </option>
                    <option value="">Sandwich</option>
                    <option value="">Burger</option>
                    <option value="">Pizza</option>
                    <option value="">Popcorn</option>
                    <option value="">Kabab</option>
                    <option value="">Fried Chicken</option>
                    <option value="">Soda</option>
                    <option value="">Ice Crram</option>
                    <option value="">Tea</option>
             </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
