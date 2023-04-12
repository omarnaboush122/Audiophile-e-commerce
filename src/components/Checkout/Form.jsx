

const Form = () => {
  return (
    <section className="mb-24">
      <div className="w-[90vw] max-w-6xl mx-auto grid grid-cols-1">
        <form>
          <article className="bg-white p-6 rounded-lg">
            <h1 className="text-3xl font-bold uppercase tracking-wider">checkout</h1>
            <div className="mb-8">
              <h3 className="text-sm text-burntSienna font-bold uppercase tracking-wider mt-8 mb-4">billing details</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="name" className="text-xs font-bold">Name</label>
                  <input type="text" id="name" className="px-6 py-5 rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="omar naboush" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="email" className="text-xs font-bold">Email Adress</label>
                  <input type="email" id="email" className="px-6 py-5 rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="omarnaboush509@gmail.com" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="phoneNumber" className="text-xs font-bold">Phone Number</label>
                  <input type="tel" id="phoneNumber" className="px-6 py-5 rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="+96181346307" />
                </div>
              </div>
            </div>
          
          </article>
        </form>
      </div>
    </section>
  );
}

export default Form;
