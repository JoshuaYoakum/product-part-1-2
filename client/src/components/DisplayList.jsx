
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const DisplayList = (props) => {
    const { products } = props

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(res=>{
                props.reload()
            })
            .catch(err => console.log(err))
    }

    return(
        <fieldset>
            <legend> DisplayList.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>product name</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i)=>                        
                    <tr key = {i}>
                            <td> <Link to={`/products/${product._id}`}>{product.title}</Link></td>
                            <td><Link to={`/products/update/${product._id}`}> edit</Link></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </fieldset>
    )
}
export default DisplayList