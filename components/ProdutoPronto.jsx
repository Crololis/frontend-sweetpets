import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import coleiraAbacate from "../assets/images/coleiraAbacate.jpeg"
import estrela from "../assets/images/star.png"

function ProdutoPronto () {

  const [produtos, setProd] = useState([])

  useEffect(() => {
    getProd()
  }, []);


  const getProd = async () => {
    const response = await axios.get("http://localhost:3004/prod");
    setProd(response.data);
  }
    return(
        <div className='produto' >
                {produtos.map((prod) => (
                  <div className="test" key={prod.id}>
          <div className='addProdutoPronto'  >
            <img src={prod.url} alt="" />
          </div>
          <div className="detalheDoProd">
            <p className="nomeDoProd">{prod.nome_produto} </p>
            <h6 className="preco">R${prod.preco_produto}</h6>
            <h6 className="avaliacao"> <img src={estrela} alt="" /> 4.98</h6>
            <div className='cadastrarProdutoPronto' >
             <NavLink to={`/produtos/${prod.id}`}> <button className='addCarrinhoPronto' >Adicionar</button></NavLink>
            </div>
          </div>
          </div>
                ))}
        </div>
    )

}

export default ProdutoPronto