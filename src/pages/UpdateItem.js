import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../utils/constantes/url";

function UpdateItem() {
  
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: '',
    price:'' ,
    picture: '',
    stock: '',
    size: '',
    color: '',
    description: '',
  });

  useEffect(()=>{
    axios.get(`${URL.fetchOneItem}/${id}`)
    .then(res => {
      setValues({...values,
         name: res.data.name,
         price: res.data.price,
         picture: res.data.picture,
         stock: res.data.stock,
         size: res.data.size,
         color: res.data.color,
         description: res.data.description,
        })
    })
    .catch(err => console.log(err))
  },[]);

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.put(`${URL.fetchOneItem}/${id}`, values)
    .then(res => {
      navigate('/');
    })
    .catch(err =>console.log(err))
  };

  /* const handleChange = (e) =>{
    
  } */

  return (
  <>
  <h1>Update Item</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={values.name} onChange={(e)=>setValues({...values, name: e.target.value})}/>
    </div>
    <div>
      <label htmlFor="price">Price</label>
      <input type="number" name="price" value={values.price} onChange={(e)=>setValues({...values, price: e.target.value})}/>
    </div>
    <div>
      <label htmlFor="picture">Picture</label>
      <input type="text" name="picture" value={values.picture} onChange={(e)=>setValues({...values, picture: e.target.value})}/>
    </div>
    <div>
      <label htmlFor="stock">Stock</label>
      <input type="text" name="stock" value={values.stock} onChange={(e)=>setValues({...values, stock: e.target.value})}/>
    </div>
    <div>
      <label htmlFor="size">Size</label>
      <input type="text" name="size" value={values.size} onChange={(e)=>setValues({...values, size: e.target.value})}/>
    </div>
    <div>
      <label htmlFor="color">Color</label>
      <input type="text" name="color" value={values.color} onChange={(e)=>setValues({...values, color: e.target.value})}/>
    </div>
    <div>
      <label htmlFor="description">Description</label>
      <input type="text" name="description" value={values.description} onChange={(e)=>setValues({...values, description: e.target.value})} />
    </div>
    <button>Modifier</button>
  </form>
  </>
  )
}

export default UpdateItem;
