import "../estilos/NavHome.sass"
import logo from "../assets/images/logo.png"
import SearchBar from "./barradepesquisa"
import { SlArrowDown } from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom"

function NavHome() {

    return (

        <div className="NavHome" >
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="BarraDePesquisa">
                <SearchBar />
            </div>
            <div className="EntrarCdt">
                <button> Entrar|Cadastrar  <div className="iconsetinha"> <SlArrowDown /> </div> </button>
                <div className="carrinhohome">
                   <div className="iconcarrinhohome"><NavLink to="/carrinho"><BsCart3 /></NavLink>  </div>
                </div>
            </div>



        </div>

    )

}

export default NavHome