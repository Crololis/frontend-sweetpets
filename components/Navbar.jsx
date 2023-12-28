import "../estilos/Navbar.sass"
import seta from "../images/img_seta.svg"

function Navbar() {

    return (

        <nav>

            <a className="link_nav" href="/">
                <img className="img_nav" src={seta} alt="Sweet Pets" />
            </a>
        </nav>
    )
}

export default Navbar