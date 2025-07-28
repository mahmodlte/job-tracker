const SelectField = ({ name, label, options, register, required }) => {
  return (
    <div className="mb-5">
      <label className="font-medium block mb-2">{label}</label>
      <select
        className="w-full  px-4 py-2 border-gray-400 border-2 rounded-sm mx-3 my-2"
        id="name"
        {...register(name, { required })}
      >
        <option value="">Select</option>
        {options.map((option, index) => {
          return (
            <option key={`${option} - ${index}`} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
