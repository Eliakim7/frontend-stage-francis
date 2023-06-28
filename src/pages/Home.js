import React, { useState, useEffect } from "react";
import { URL } from "../utils/constantes/url";
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.scss'

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //requete api
    const fetchItems = async () => {
      try {
        const { data } = await axios.get(URL.fetchItems);
        setItems(data);
        console.log('data')
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  const deleteItem = async (_id)=>{
    let result = await fetch(`${URL.fetchDeleteOne}/${_id}`, {method: "DELETE"});
  }

  return (
    <>
      <h1>Home</h1>
      <div className="item">
        <ul className="api">
          {items.map((item) => {
            return (
              <li key={item._id}>
                <div className="item-container">
                  <div className="item-info">
                    <h2>{item.name}</h2>
                    <p>prix: {item.price} €</p>
                    <p>couleur: {item.color}</p>
                    <p>taille: {item.size}</p>
                  </div>
                  <div className="item-img">
                    <Link to={`detail/${item._id}`}>
                    <img src={item.picture} alt="Casquette" />
                    </Link>
                  </div>
                  <div className="item-desc">
                    <p>{item.description}</p>
                  </div>
                </div>
                <button onClick={()=>deleteItem(item._id)}>❌</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
