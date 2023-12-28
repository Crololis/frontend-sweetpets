function Select3({ name, className, value, onChange }) {
    return (
      <>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={className}
        >
          <option label="Sim"></option>
          <option label="Não"></option>
        </select>
      </>
    )
  }
  export default Select3