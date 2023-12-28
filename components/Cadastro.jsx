import "../estilos/Cadastro.sass"
import { useState } from "react"
import Input from "./InputLogin/Email";
import cadastro from "../services/cadastro"
import BotaoLc from "./buttonLogin/BotaoLc"
import fundo from "../assets/images/adote2.png"



function Cadastro() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`usuario ${email} foi cadastratado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPass, setConfirmPass] = useState()


    return (
        <div className="body">
            <div className="left"
                style={{ backgroundImage: `url(${fundo})` }}>
            </div>

            <div className="FormCadastro">

                <BotaoLc />

                <form onSubmit={cadastrarUsuario}>
                    
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label={"nome"}
                    />

                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label={"email"}
                    />

                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label={"senha"}
                    />

                    <Input
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                        label={"Confirme a senha"}
                    />


                    <div>
                        <label className="labelCadastrar">
                            <button
                                className="BotaoCadastrar"
                                type="button"
                                value={cadastro}
                                onClick={() => cadastro(name, email, password )}
                            > <h3>Cadastrar</h3>
                            </button>

                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro