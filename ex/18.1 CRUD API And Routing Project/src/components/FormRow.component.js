const FormRow = ({ type, name, value, handleChange, error }) => {
  return (
    <div className='form-row'>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className={`form-input ${error && 'error'}`}
        placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
      />
    </div>
  );
};
export default FormRow;
