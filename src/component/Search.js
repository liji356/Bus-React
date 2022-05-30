import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {

    const[data,setdata]=useState([{"busname":"","busreg":"","busowner":"","contact":""}])
    var[route,setroute]=useState("")

    const newsearch=()=>{
        const data={"route":route}
        console.log(data)

        axios.post("http://localhost:4000/api/search",data).then(
            (response)=>{
                console.log(response.data)
                setdata(response.data.data)
            }
        )
    }

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
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                    <label for="" className="form-label">Route</label>
                    <input onChange={(x)=>{setroute(x.target.value)}} type="text" className="form-control"/>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                    <button onClick={newsearch} className="btn btn-info">SEARCH</button>
                    </div>

                </div>
                </div>
                {data.map((value,key)=>{
                    return <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                    Busname
                        <input  type="text" value={value.name} className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                    Busreg
                        <input  type="text" value={value.reg} className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                        busowner
                        <input  type="text" value={value.owner} className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                        contact
                        <input  type="text" value={value.contact} className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xk-12 col-xxl-12">
                            <button onClick={()=>{deleteApi(value._id)}} className='btn btn-danger'>DELETE</button>
                        
                        
                        </div>
                        </div>
                   
                })}

                </div>
                </div>
                </div>
    </div>
  )
}

export default Search