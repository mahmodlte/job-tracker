const InputField = ({ name, label, type, placeholder, register, required }) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
        className="w-full  px-4 py-2 border-gray-400 border-2 rounded-sm mx-3 my-2"
      />
    </div>
  );
};
export default InputField;
