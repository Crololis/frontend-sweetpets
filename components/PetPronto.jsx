import "../estilos/PetPronto.sass"
// import pet from "../assets/images/gatoPet.jpg"
import React, { useState, useEffect } from "react";
import axios from "axios";


function PetPronto () {
  const [animais, setAnimais] = useState([])

  useEffect(() => {
    getAnimais()
  }, []);


  const getAnimais = async () => {
    const response = await axios.get("http://localhost:3004/animais");
    setAnimais(response.data);
  }

    return(


        <div className='petPronto' >
          {animais.map((animal) => (
            <div className="testee" >
                   <div className='addPetImgPronto'key={animal.id}>
                   <img src={animal.url} alt="" />
                 </div>
                 <div className='detalhesPet' >
                   <p className="nomePet">{animal.nome}</p>
                   <h6 className="localPetPronto">{animal.cidade}-{animal.estado}</h6>
                 </div>
                 </div>         
          ))}
          
        </div>
    )

}

export default PetPronto