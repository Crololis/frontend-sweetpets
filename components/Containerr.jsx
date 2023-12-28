import "../estilos/Containerr.sass"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carrossel from "./Carrossel";
import iconvenda from "../assets/images/etiqueta.png"
import iconcaixa from "../assets/images/caixa.png"
import iconsaude from "../assets/images/cruz.png"
// import Produtos from "./Produtos";
import ProdList from "./ProdList";
// import ProdutoPronto from "./ProdutoPronto"
import Footer from "./Footer";
// import Pet from "./Pet";
// import PetPronto from "./PetPronto"
import AnimalList from "./AnimaisList";

function Container() {

  return (
    <div className="body">
      <div className="Container">
        <div className="divPropaganda">
          <div className="icon"><img className="imgicon" src={iconsaude} alt="icone saude" /></div>

          <p className="p">E os planos de saúde?</p>
          <h6 className="agaseis">Uma vida mais longa para o seu pet</h6>
        </div>

        <div className="divPropaganda">
          <div className="icon"> <img className="imgicon" src={iconcaixa} alt="icone de caixa" /> </div>
          <p className="p">Fashion Week Canina!</p>
          <h6 className="agaseis">Deixe seu pet mais estiloso</h6>
        </div>

        <div className="divPropaganda">
          <div className="icon"> <img className="imgicon" src={iconvenda} alt="icone e venda" /> </div>
          <p className="p">Buffet de petiscos</p>
          <h6 className="agaseis">As melhores rações com molho do chef</h6>
        </div>
      </div>
      <div className="divcarrossel">
        <Carrossel />
      </div>

      <div>
        <h2 className="agaum" >Seu pet também pode gostar</h2>
      </div>

   <div className="divDosProduto">

        {/* <ProdutoPronto/> */}
        
        <ProdList />    
        {/* <Produtos /> */}


    
      </div> 

      <div>
         <h2 className="agaum">Novos peludos por aqui</h2>
      </div>

      {/* <div className="divDosPet"> */}
        {/* <PetPronto/>       */}
        
       <AnimalList />

      {/* </div> */}

      <Footer /> 
    </div>

  )
}

export default Container