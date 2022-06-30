import React from 'react'

const ItemTable = ({carts,setCarts}) => {
  return (
    <div style={{height:"200px"}}>
        
        <table className="table mt-4" >
  <thead>
    <tr className='fs-5'>
      <th scope="col">No</th>
      <th scope="col"> Food Name </th>
      <th scope="col">  Cost </th>
      <th scope="col">quntity</th>
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
       <button>-</button>
        <span className='badge mx-2 bg-primary p-2 '>{item.quentity}</span>
       <button>+</button>
      </td>
    </tr>
)}
 </tbody>
</table>
    </div>
  )
}

export default ItemTable