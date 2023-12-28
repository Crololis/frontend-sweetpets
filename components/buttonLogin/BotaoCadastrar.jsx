
function BotaoCadastrar(props) {

    return (
        <div>
            <label className="botaoCadastrar"> {props.BotaoCadastrar}
                <input className="BotaoCadastrar"
                    type="submit"
                    value="login"
                    onClick={() => login(email, password)} />

            </label>
        </div>

    )

}