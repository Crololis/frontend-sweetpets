import React, { useState, useEffect } from "react";
import axios from "axios";
import adicionar from "../assets/images/adicionar.png"
import "../estilos/ProdList.sass"
import { NavLink } from "react-router-dom";

// import "./AnimaisList.css"


const ProdList = () => {

  const [produtos, setProd] = useState([])

  useEffect(() => {
    getProd()
  }, []);


  const getProd = async () => {
    const response = await axios.get("http://localhost:3004/prod");
    setProd(response.data);
  }


  return (

   

    <div className="containerr">
      
      {produtos.map((prod) => (
        <div class="carrd" key={prod.id}>
        <img src={prod.url} alt="Avatar" className="imgs"/>
        <div class="containerrrr">
          <p><b>{prod.nome_produto}</b></p>
          <p>R${prod.preco_produto}</p>
        
        </div>
        <NavLink to={`/produto/${prod.id}`}> <button className="botão">Ver mais</button></NavLink> 
       

        
      </div>
      
      
      ))}
       <div class="carrd" >
        <img src={adicionar} alt="Avatar" className="imgss"/>
      
        <NavLink to={"/prod"}><button className="botãoo">Ver mais</button></NavLink>
        </div>
      </div>
 



  )
}
export default ProdList
