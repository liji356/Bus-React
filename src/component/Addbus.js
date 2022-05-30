import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Addbus = () => {
    var[route,setroute]=useState("")
    var[name,setBusname]=useState("")
    var[reg,setBusreg]=useState("")
    var[owner,setBusownername]=useState("")
    var[contact,setcontact]=useState("")
    

    const newvalue=()=>{
        const data={"route":route,"name":name,"reg":reg,"owner":owner,"contact":contact}
        console.log(data)
        axios.post("http://localhost:4000/api/busadd",data).then(
            (response)=>{
                console.log(response.data,data)
             
                if(response.data.status==="success")
                {
                    alert("successfully inserted")
                }
                else
                {
                    alert("Failed")
                }
            }
        )
    }
  return (
    <div>
        <Navbar/>
        
        
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                    <label for="" className="form-label">Route</label>
                    <input onChange={(x)=>{setroute(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                    <label for="" className="form-label">Bus Name</label>
                    <input onChange={(x)=>{setBusname(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                    <label for="" className="form-label">Register No</label>
                    <input onChange={(x)=>{setBusreg(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                    <label for="" className="form-label">Bus Owner name</label>
                    <input onChange={(x)=>{setBusownername(x.target.value)}} type="text" className="form-control"/>
                
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                    <label for="" className="form-label">Contact </label>
                    <input onChange={(x)=>{setcontact(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                   
                    <button onClick={newvalue} className="btn btn-info">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
        
        </div>
  )
}

export default Addbus