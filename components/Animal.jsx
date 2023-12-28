import "../estilos/Animal.sass"
import { useParams } from "react-router-dom"
//import location from "./images/location.svg"

function Container() {

    const {id} = useParams();
    // const [bixo, setBixo] 

  return (

    <main>

      <div className="div_img_container">

        <div className="div_img_2"></div>
      </div>

      <div className="div_descrição">

        <h1 className="h1_descrição">Chiquinho</h1>

        <div className="div_localização">

          <img src={location} alt="Sweet Pets" className="img_location" />

          <span className="span_location">xique xique-BA</span>
        </div>

        <div className="descrição_animal">

          <div><h2 className="h2_descrição">A história de Chiquinho</h2>

          <span className="span_descrição">Esse é o chiquinho irmão do kiwi 
          e da amora, filhote da gatinha grávida que resgatei, ele com toda 
          certeza é o mais manhoso da ninhada e comilão, é muito sociável e 
          ama brincar.</span></div>

          <button className="bttn">Entrar em contato</button>
        </div>
      </div>

    </main>
  )
}

export default Container