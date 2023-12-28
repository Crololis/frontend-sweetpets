import React, { useState, useEffect } from "react";
import axios from "axios";
import adicionar from "../assets/images/adicionar.png"
// import "../estilos/PetPronto.sass";
import { NavLink } from "react-router-dom";
import "../estilos/AnimalList.sass"


const AnimalList = () => {

  const [animais, setAnimais] = useState([])

  useEffect(() => {
    getAnimais()
  }, []);


  const getAnimais = async () => {
    const response = await axios.get("http://localhost:3004/animais");
    setAnimais(response.data);
  }


  return (

    <div className="containerr">

        {animais.map((animal) => (
                       <div class="cardd" key={animal.id}>
                       <img src={animal.url} alt="Avatar" className="image" />
                       <div class="containerrr">
                         <p className="para"><b>{animal.nome}</b></p>
                         <p className="para">{animal.estado} - {animal.cidade}</p>

                       </div>
                       <NavLink to={`/animal/${animal.id}`}> <button className="botão">Adotar</button></NavLink> 
                     </div>
               
             ))}
        
          <div class="cardd">
                       <img src={adicionar} alt="Avatar" className="image" />
                       <div class="containerrr">
                       </div>
                       <NavLink to={`/add`}> <button className="botão">Divulgar</button></NavLink> 
                     </div>
          </div>
          
          
        )
}
export default AnimalList
