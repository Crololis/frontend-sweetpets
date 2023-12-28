import { NavLink } from "react-router-dom"
import "../estilos/Produtos.sass"
import adicionar from "../assets/images/adicionar.png"


function Produtos() {

    return (
        <div>
                    <div className='produto' >
                        <div className='addProduto' >
                                <img src={adicionar} alt="" />
                        </div>
                        <div className='cadastrarProduto' >
                        <NavLink to={"/prod"}> <button className='addCarrinho' >Adicionar produto</button></NavLink>
                        </div>
                        
                    </div>
        </div>
    )

}

export default Produtos