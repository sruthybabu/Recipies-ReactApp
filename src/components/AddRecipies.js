import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const AddRecipies = () => {
    var [recipename,setRecipename]=useState("")
    var [category,setCategory]=useState("")
    var [description,setDescription]=useState("")
    var [prepare,setPrepare]=useState("")
    const subData=()=>{
        const data={"recipesTitle":recipename,"category":category,"description":description,"prepare":prepare}
        console.log(data)
        axios.post("http://localhost:5002/api/recipesadd",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                     alert("Successfully added")
                }
                else{
                    alert("failed to add")

                }

        })
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Recipes Title</label>
                    <input onChange={(b)=>{setRecipename(b.target.value)}} placeholder="Enter recipe name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Category</label>
                    <select onChange={(b)=>{setCategory(b.target.value)}} name="" id="" className="form-control">
                        <option value="veg">Veg</option>
                        <option value="Nonveg">Non-Veg</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Description</label>
                    <textarea onChange={(b)=>{setDescription(b.target.value)}} placeholder="Enter recipe detailes" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Prepared By</label>
                    <input onChange={(b)=>{setPrepare(b.target.value)}} placeholder="Enter name" type="text" className="form-control"/>
                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default AddRecipies