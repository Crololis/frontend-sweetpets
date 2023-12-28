import "../estilos/Footer.sass"
import zap from "../assets/images/img_zap.svg"
import face from "../assets/images/img_face.svg"
import insta from "../assets/images/img_insta.svg"
import logo from "../assets/images/Logobranca.png"
import tijuca from "../assets/images/img_tijuca.png"

function Footer() {

  return (

    <footer>

      <div>
        <img className="img_footer" src={logo} alt="Sweet Pets" />
      </div>

      <div className="div_seguir">

        <p className="p_seguir">Siga-nos</p>

        <div className="div_link_insta">

          <a className="link_img_insta" href="/">
            <img className="img_insta" src={insta} alt="Sweet Pets" />
          </a>

          <a className="link_insta" href="/">sweet.pets</a>
        </div> {/* fim div_link_insta */}

        <div className="div_link_face">

          <a className="link_img_face" href="/">
            <img className="img_face" src={face} alt="Sweet Pets" />
          </a>

          <a className="link_face" href="/">Sweet Pets</a>
        </div> {/* fim div_link_face */}

        <div className="div_link_zap">

          <a className="link_img_zap" href="/">
            <img className="img_zap" src={zap} alt="Sweet Pets" />
          </a>

          <a className="link_zap" href="/">+55 85 9.9662-6358</a>
        </div> {/* fim div_link_zap */}
      </div>  {/* fim div_seguir */}

      <div className="div_adotar">

        <p className="p_adotar0">Adote</p>
        <p className="p_adotar1">Adote com responsabilidade</p>
        <p className="p_adotar2">Pesquisar animais</p>
      </div>

      <div className="div_patrocinadores">

        <p className="p_patrocinadores">Patrocinadores</p>

        <img className="img_tijuca" src={tijuca} alt="Sweet Pets" />
      </div>
    </footer>
  )
}

export default Footer