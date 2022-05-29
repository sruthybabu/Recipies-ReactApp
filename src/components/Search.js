import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const deleteRecipe=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:5002/api/delete",data).then(
            (response)=>{
                if(response.data.status=="success")
                {
                    alert("Successfully deleted")
                }
                else
                {
                    alert("Failed to delete")
                }
            })
    }





    const [data,setData]=useState([{"category":"","description":"","prepare":""}])
    var [recipename,setRecipename]=useState("")
    const subData=()=>{
        const data={"recipesTitle":recipename}
        console.log(data)
        axios.post("http://localhost:5002/api/search",data).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)

        })

    }
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <label for="" className="form-label">Recipes Title</label>
                       <input onChange={(b)=>{setRecipename(b.target.value)}} placeholder="Enter recipe name" type="text" className="form-control"/>
                    </div>
                    <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                        <button onClick={subData} className='btn btn-primary'>SEARCH</button>
                    </div>
                    </div>
                    {data.map((value,key)=>{
                        return <div className='row g-3'>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <label for="" className="form-label">Category</label>
                            <input value={value.category} type="text" className="form-control"/>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <label for="" className="form-label">Description</label>
                            <textarea value={value.description} name="" id="" cols="30" rows="10" className="form-control"></textarea>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <label for="" className="form-label">Prepared By</label>
                            <input value={value.prepare} type="text" className="form-control"/>
                            </div>
                            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                            <button onClick={()=>{deleteRecipe(value._id)}} className='btn btn-danger'>DELETE</button>
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