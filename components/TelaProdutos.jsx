import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "../estilos/TelaProdutos.sass"

const ProdList = () => {

    const [produtos, setProd] = useState([])

    useEffect(() => {
      getProd()
    }, []);
  
  
    const getProd = async () => {
      const response = await axios.get("http://localhost:3004/prod");
      setProd(response.data);
    }
    
    const [selectedCategory, setSelectedCategory] = useState(null)
    const handleChange = event => {
      setSelectedCategory(event.target.value)
    }
    
  
    return (
  
     
      
      <div className="containeerr">
      <div className="filtrar">
      <div className="filter">
  


  <div className="filterr">
  <div className="filtro">Filtro</div>
  <h3 className="p_filter">Categoria</h3>
 
     <div className="Categoria">
          <li>  <input type="radio" value="Todos" />Todos</li>
          <li>  <input type="radio" value="Higiene" />Higiene</li>
          <li>  <input type="radio" value="Ração" />Ração</li>
          <li>  <input type="radio" value="Vestimenta" />Vestuário</li>
          <li>  <input type="radio" value="Brinquedos" />Brinquedos</li>
          </div>
          <h3 className="p_filter">Preço</h3>
    <div className="Preço">
         
        <li> <input type="radio" value="Até R$50" />Até R$50</li> 
        <li>  <input type="radio" value="Até R$100" />Até R$100</li>
        <li>  <input type="radio" value="Até R$200" />Até R$200</li>
        <li>  <input type="radio" value="Até R$300" />Até R$300</li>
          
    </div>
    <h3 className="p_filter">Tamanho</h3>
    <div className="Tamanho">
    
         <li> <input type="radio" value="PP" />PP</li>
         <li> <input type="radio" value="P" />P</li>
         <li> <input type="radio" value="M" />M</li>
         <li> <input type="radio" value="GG" />GG</li>
          
    </div>
  </div>
</div>
      </div>
        {produtos.map((prod) => (
          <div class="caarrd" key={prod.id}>
          <img src={prod.url} alt="Avatar" className="imgs"/>
          <div class="containeerrrr">
            <p><b>{prod.nome_produto}</b></p>
            <p className="precinho">R${prod.preco_produto}</p>
          
          </div>
          <div className="buttoonn">
         <NavLink to={`/produto/${prod.id}`}> <button className="bootão">Ver mais</button></NavLink> 
            </div>
          
        </div>
        
        
        ))}
      
        </div>
   
  
  
  
    )
  }
  export default ProdList