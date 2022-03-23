import React, {useState} from "react";
import axios from "axios";

const CreateForm = (props) =>{
    const [producttitle, setProducttitle] = useState("")
    const [productprice, setProductprice] = useState(0)
    const [productdescription, setProductdescription] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products/new`, {title: producttitle, price: productprice, description: productdescription})
            .then(res=>{
                props.reload()
                clearForm()
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors
                const errorArr =[]
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr)
            })

    }
    const clearForm = () =>{
        setProducttitle("")
        setProductprice(0)
        setProductdescription("")
    }

    return(
        <fieldset>
        <legend> CreateProductForm.jsx</legend>
        <form onSubmit={handleSubmit}>
            <div>
                <label> title</label>
                <input type="text" name="producttitle" value={producttitle}
                    onChange={e => setProducttitle(e.target.value)}
                />
            </div>
            <div>
                    <label> price</label>
                    <input type="number" name="productprice" value={productprice}
                        onChange={e => setProductprice(e.target.value)}
                    />
                </div>
                <div>
                <label> description</label>
                <input type="text" name="productdescription" value={productdescription}
                    onChange={e => setProductdescription(e.target.value)}
                />
            </div>
            <button> Submit</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
            </fieldset>
    )
}
export default CreateForm