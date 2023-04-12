

const TextInput = ({ label, name, type, error, placeholder, style, register }) => {
  return (
    <div className={`relative flex flex-col gap-2 ${style}`}>
      <label htmlFor={name} className={`text-xs font-bold ${error?.message ? "text-danger" : "text-black"}`}>{label}</label>
      <input type={type} id={name} className={`px-6 py-5 text-sm font-bold rounded-lg border-2 border-solid caret-burntSienna ${error?.message ? "border-danger focus:border-danger outline-danger" : "border-[#cfcfcf] focus:border-burntSienna outline-burntSienna"}`} placeholder={placeholder} {...register(name, {
        required: "this field is required"
      })} />
      <p className="absolute top-0 right-0 text-xs font-bold text-danger">{error?.message}</p>
    </div>
  );
}

export default TextInput;
