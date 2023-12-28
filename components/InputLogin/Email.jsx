import "./Email.sass"



function Input(props) {



    return (

        <div>
            <label className="label"> {props.label} <div className="iconemail" > {props.icone} </div></label>
            <input
                className="input"
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
        </div>

    )

}
  

export default Input