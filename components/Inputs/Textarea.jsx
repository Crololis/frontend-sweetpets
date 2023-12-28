function Textarea({ name, value, onChange }) {
    return (
      <>
        <textarea
          required
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      </>
    )
  }
  
  export default Textarea