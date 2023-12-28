function Input({ id, type, name, value, onChange }) {
    return (
      <>
        <input
          required
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </>
    )
  }
  
  export default Input