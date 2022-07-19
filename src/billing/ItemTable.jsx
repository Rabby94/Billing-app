import React from 'react'

const ItemTable = ({carts,setCarts}) => {


  const handelChange =(type,index)=> {
    let newCarts =[...carts];
    type==="increment" ?
     newCarts[index].quentity++
      :newCarts[index].quentity>1
      && newCarts[index].quentity-- ;

     if (type==="remove" ){
       newCarts=carts.filter((item,idx) => index !== idx )
     }
    setCarts(newCarts)
  }


  return (
    <div style={{height:"200px"}}>
        
        <table className="table mt-4" >
  <thead>
    <tr className='fs-5'>
      <th scope="col">No</th>
      <th scope="col"> Food Name </th>
      <th scope="col">  Cost </th>
      <th scope="col">Quntity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody >
 {
  carts.map((item ,index)=>
    <tr 
    key ={index}>
      <td>
        {index+1}
      </td>
      <td>
        {item.name}
      </td>
      <td>
        {item.cost}
      </td>
      <td>
       <button
       className=' btn badge p-3 bg-danger'
       onClick={()=>handelChange("decrement",index)}
       >-</button>
        <span className='badge mx-2 bg-primary p-3 '>{item.quentity}</span>
       <button
       className='btn btn badge p-3 bg-success'
       onClick={()=>handelChange("increment",index)}>+</button>
      </td>
      <td>
        <span>{item.cost*item.quentity}$</span>
      </td>
      <td>
        <button  className='btn '
          onClick={()=> handelChange("remove",index)}>
            x
        </button>
      </td>
    </tr>
)}
 </tbody>
</table>
    </div>
  )
}

export default ItemTable