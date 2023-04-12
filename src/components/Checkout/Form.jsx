

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
                  <input type="text" id="name" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="Alexei Ward" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="email" className="text-xs font-bold">Email Adress</label>
                  <input type="email" id="email" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="Alexei@mail.com" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="phoneNumber" className="text-xs font-bold">Phone Number</label>
                  <input type="tel" id="phoneNumber" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="+1 202-555-0136" />
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-sm text-burntSienna font-bold uppercase tracking-wider mt-8 mb-4">shipping info</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="address" className="text-xs font-bold">Your Address</label>
                  <input type="text" id="address" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="1137 Williams Avenue " />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="zip" className="text-xs font-bold">ZIP Code</label>
                  <input type="text" id="zip" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="10001" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="city" className="text-xs font-bold">City</label>
                  <input type="text" id="city" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="New York" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="country" className="text-xs font-bold">Country</label>
                  <input type="text" id="country" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] focus:border-burntSienna focus:outline-burntSienna" placeholder="United States" />
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
