import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                const products = res.data 
                console.log(products)
                setTitle(products.title)
                setPrice(products.price)
                setDescription(products.description)
            })
        .catch(err=> console.log(err))
    },[])

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/update/${id}`,{title, price, description})
            .then(res=>{
                history.push("/products")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors
                const errorArr =[]
                for( const key of Object.keys(errorResponse)){ 
                    errorArr.push(errorResponse[key]) 
                }
                setErrors(errorArr)
            })
    } 
    const handleDelete =()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
          .then(res=>history.push("/"))
          .catch(err=>console.log(err))
        // in order to delete, id is needed
      }
  return (
    <fieldset>
        <legend> edit product.jsx</legend>
        <form onSubmit ={handleSubmit}>
            <div>
                <label> Product title</label>
                <input type="text" name="title" value={title}
                onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label> Porduct Price</label>
                <input type="number" name="price" value={price}
                onChange={e=>setPrice(e.target.value)}/>
            </div>
            <div>
                <label> Porduct description</label>
                <input type="text" name="description" value={description}
                onChange={e=>setDescription(e.target.value)}/>
            </div>
            <button> Submit</button>
        </form>
        {
        errors.map((err, i)=>(
            <p key={i} style={{color:"red"}}>{err}</p>
        ))
      }
       <button className="btn btn-danger btn-block" onClick={handleDelete}>Delete</button>
    </fieldset>
  )
}

export default Edit