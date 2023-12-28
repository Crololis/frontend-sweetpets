import { useParams } from "react-router-dom";
import "../estilos/Details.Pet.sass"
import axios from "axios";
import location from "../assets/images/location.svg"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import { getAnimalbyId } from "../../../backend/controllers/animalController";
import { useEffect, useState } from "react"

const DetailsPet = ({ match }) => {

  const {id} = useParams();
  const [anemal, setAnemal] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    const getAnimalzin = async () =>{
      setLoading(true);
      const response = await fetch(`http://localhost:3004/animais/${id}`)
      setAnemal(await response.json())
      setLoading(false);
    }
    getAnimalzin()
  }, []);

  const Loading = () =>{
    return(
      <>
            Loading........
      </>
    )
  }
  const ShowAnemal = () =>{
   return (
   <>
   <Navbar />
   <div className="div_img_container">

<div className="div_img_2"><img src={anemal.url} className="IMAGES" alt="" /></div>
</div>

  <div className="div_descrição">

    <h1 className="h1_descrição">{anemal.nome}</h1>

    <div className="div_localização">

      <img src={location} alt="Sweet Pets" className="img_location" />

      <span className="span_location">{anemal.cidade}-{anemal.estado}</span>
    </div>

    <div className="descrição_animal">

      <div><p className="h2_descrição">A história de Chiquinho</p>

      <span className="span_descrição">Esse é o chiquinho irmão do kiwi 
      e da amora, filhote da gatinha grávida que resgatei, ele com toda 
      certeza é o mais manhoso da ninhada e comilão, é muito sociável e 
      ama brincar.</span></div>
      
      <button className="bttn">Entrar em contato</button>
    </div>
  </div>
    <Footer/>
    </>
   )  
}
  

  return (

    <main>
      <div className="row"> {loading ? <Loading/> : <ShowAnemal/>}
      </div>
     
  </main>
  
  )}

export default DetailsPet