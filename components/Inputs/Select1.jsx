function Select1({ name, className, value, onChange }) {
    return (
      <>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={className}
        >
          <option label="Látex"></option>
          <option label="Algodão"></option>
          <option label="Plástico"></option>
          <option label="Alumínio"></option>
          <option label="Borracha"></option>
        </select>
      </>
    )
  }
  export default Select1