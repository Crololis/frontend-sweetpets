import "../buttonLogin/BotaoLc.sass"
import { Link } from 'react-router-dom'

const MyComponent = () => {

    return (
        <div className="botoes">

            <button className="login"><Link to="/Login" className="linkLogin" >Login</Link></button>
            <button className="cadastro"><Link to="/Cadastro" className="linkCadastro" >Cadastro</Link></button>

        </div>
    );
};

export default MyComponent;
