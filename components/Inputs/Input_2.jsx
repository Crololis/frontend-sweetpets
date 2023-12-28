function Input2({id, type, name, accept, value, onChange}) {
    return (
      <>
        <input
          required
          id={id}
          type={type}
          name={name}
          accept={accept}
          value={value}
          onChange={onChange}
        />
      </>
    )
  }
  
  export default Input2