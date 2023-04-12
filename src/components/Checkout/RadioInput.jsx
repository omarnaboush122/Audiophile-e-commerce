

const RadioInput = ({ payment, setPayment, name, text }) => {
  return (
    <div className="flex items-center gap-4 font-bold px-6 py-5 rounded-lg border border-solid border-[#cfcfcf] cursor-pointer md:w-80" onClick={() => setPayment(name)}>
      <div className="relative w-6 h-6 rounded-full border border-solid border-[#cfcfcf]">
        {
          payment === name ? <div className="absolute w-3 h-3 rounded-full top-1/2 left-1/2 bg-burntSienna -translate-x-1/2 -translate-y-1/2"></div> : null
        }
      </div>
      {text}
    </div>
  );
}

export default RadioInput;
