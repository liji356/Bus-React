import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {

  var[buslist,setviewlist]=useState([])
  axios.get("http://localhost:4000/api/viewbus").then(
    (response)=>{
      console.log(response.data)
      setviewlist(response.data.data)
    }
  )
  const deleteApi=(id)=>{
    const data={"_id":id}
    console.log(data)
    axios.post("http://localhost:4000/api/deletebus",data).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status=="success")
            {
               alert("succesfully")
            }
            else
            {
                alert("failed")
            }

        }
    )

}
   
  return (
    
    <div>
      <Navbar/>
      <div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
          <br></br>
        <table class="table table-info">
  <thead>
    <tr>
      <th scope="col">Route</th>
      <th scope="col">Bus Name</th>
      <th scope="col">Reg.No</th>
      <th scope="col">Owner name</th>
      <th scope="col">Contact No</th>
    </tr>
  </thead>
  <tbody>
    

  {buslist.map((value,key)=>{
    return <tr>
      <th scope="row">{value.route}</th>
      <td>{value.name}</td>
      <td>{value.reg}</td>
      <td>{value.owner}</td>
      <td>{value.contact}</td>
      <td><button onClick={()=>{deleteApi(value._id)}} className='btn btn-danger'>DELETE</button></td>
    </tr>
    
  
  })}
 </tbody>

</table>
 
          </div>
          </div>
          </div>
        </div>


    
  )
}

export default View