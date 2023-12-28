import "../estilos/Navbarr.sass"
import seta from "../assets/images/img_seta.svg"
import logo from "../assets/images/Logobranca.png"

function Navbar() {

    return (
        <div className="divNav">
                    <a className="link_nav" href="/">
                        <img className="img_nav" src={seta} alt="Sweet Pets" />
                    </a>

                     <img className="imgLogo" src={logo} alt="logo" />
                     <div className="sup"></div>
        </div>
          
           
        



    )
}

export default Navbar