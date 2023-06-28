import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../utils/constantes/url";

function ItemDetails (){
  const [item, setItem] = useState({});
  const params = useParams();
  const {id} = params;
  
  useEffect(()=>{

      fetch(`${URL.fetchOneItem}/${id}`)
      .then(res => res.json())
      .then(data => {
          setItem(data)
          console.log(data)
      })

  },[])

  return(
    <>
      <h1>Produit</h1>
      <div className="item-container">
        <div className="item-info">
          <h2>{item.name}</h2>
          <p>prix: {item.price} €</p>
          <p>couleur: {item.color}</p>
          <p>taille: {item.size}</p>
        </div>
        <div className="item-img">
          <img src={item.picture} alt="Casquette" />
        </div>
        <div className="item-desc">
          <p>{item.description}</p>
        </div>
      </div>

    </>
  )
}

export default ItemDetails