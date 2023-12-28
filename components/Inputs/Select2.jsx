function Select2({ name, className, value, onChange }) {
    return (
      <>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={className}
        >
          <option label="Alta"></option>
          <option label="Média"></option>
          <option label="Baixa"></option>
        </select>
      </>
    )
  }
  export default Select2