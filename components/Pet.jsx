import { NavLink } from "react-router-dom"
import adicionar from "../assets/images/adicionar.png"


function Pet () {

return(
    <div className='pet' >
          <div className='addPetImg' >
            <img src={adicionar} alt="" />
          </div>
          <div className='cadastrarPet' >
            <NavLink to={"/add"}><button className='addPet' > Adicionar pet</button></NavLink>
          </div>

        </div>
)

}

export default Pet