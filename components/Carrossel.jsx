import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/images/promo1.png"
import img2 from "../assets/images/promo2.png"
import img3 from "../assets/images/djabo3.webp"
import img4 from "../assets/images/djabo4.gif"


function Carrossel() {
    
  

    return(
      <div>
      <Carousel>
        <Carousel.Item>
          <img className='imagem'
            src={img1} alt="One"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className='imagem'
            src={img2} alt="Two"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className='imagem'
            src={img3} alt="three"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className='imagem'
            src={img4}
            alt="four"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    )

}

export default Carrossel