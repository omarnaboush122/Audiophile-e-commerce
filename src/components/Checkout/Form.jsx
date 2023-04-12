import { useContext, useState } from "react";
import Cash from "../../assets/checkout/icon-cash-on-delivery.svg";
import { Context } from "../../Context";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


const Form = () => {
  const [payment, setPayment] = useState("e-money");
  const { products, totalPrice, formatPrice } = useContext(Context);
  const shipping = 50;
  const vat = 1079;
  const grandTotal = totalPrice + shipping + vat;

  const { register, control, handleSubmit, formState} = useForm();
  const {errors} = formState;

  const onSubmit = (data) => {
    console.log("form submitted", data);
  }

  const productsElements = products.map(product => (
    <div key={product.id} className="flex">
      <img src={product.img} alt={product.name} className="w-16 h-16 rounded-lg mr-4" />
      <div className="flex flex-col gap-2 mr-auto">
        <h3 className="text-sm font-bold uppercase tracking-wider max-w-[12rem]">{product.name}</h3>
        <p className="text-sm font-bold opacity-50">{formatPrice(product.price)}</p>
      </div>
      <p className="text-sm font-bold opacity-50">{product.count}x</p>
    </div>
  ));

  return (
    <section className="mb-24">
      <div className="w-[90vw] max-w-6xl mx-auto grid grid-cols-1">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 lg:flex-row">
          <article className="bg-white p-8 rounded-lg lg:flex-1">
            <h1 className="text-3xl font-bold uppercase tracking-wider">checkout</h1>
            <div className="mb-8">
              <h3 className="text-sm text-burntSienna font-bold uppercase tracking-wider mt-8 mb-4">billing details</h3>
              <div className="flex flex-wrap gap-6">
                <div className="relative flex flex-col gap-2 flex-1">
                  <label htmlFor="name" className={`text-xs font-bold ${errors.name?.message ?"text-danger" :"text-black"}`}>Name</label>
                  <input type="text" id="name" className={`px-6 py-5 text-sm font-bold rounded-lg border-2 border-solid caret-burntSienna focus:border-burntSienna focus:outline-burntSienna ${errors.name?.message ? "border-danger": "border-[#cfcfcf]"}`} placeholder="Alexei Ward" {...register("name",{
                    required: "this field is required"
                  })} />
                  <p className="absolute top-0 right-0 text-xs font-bold text-danger">{errors.name?.message}</p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="email" className="text-xs font-bold">Email Adress</label>
                  <input type="email" id="email" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] caret-burntSienna focus:border-burntSienna focus:outline-burntSienna" placeholder="Alexei@mail.com" {...register("email",{
                    required: "this field is required"
                  })} />
                  <p>{errors.email?.message}</p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="phoneNumber" className="text-xs font-bold">Phone Number</label>
                  <input type="tel" id="phoneNumber" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] caret-burntSienna focus:border-burntSienna focus:outline-burntSienna" placeholder="+1 202-555-0136" {...register("phoneNumber",{
                    required: "this field is required"
                  })} />
                  <p>{errors.phoneNumber?.message}</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-sm text-burntSienna font-bold uppercase tracking-wider mt-8 mb-4">shipping info</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="address" className="text-xs font-bold">Your Address</label>
                  <input type="text" id="address" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] caret-burntSienna focus:border-burntSienna focus:outline-burntSienna" placeholder="1137 Williams Avenue" {...register("address")} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="zip" className="text-xs font-bold">ZIP Code</label>
                  <input type="text" id="zip" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] caret-burntSienna focus:border-burntSienna focus:outline-burntSienna" placeholder="10001" {...register("zip")} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="city" className="text-xs font-bold">City</label>
                  <input type="text" id="city" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] caret-burntSienna focus:border-burntSienna focus:outline-burntSienna" placeholder="New York" {...register("city")} />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="country" className="text-xs font-bold">Country</label>
                  <input type="text" id="country" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] caret-burntSienna focus:border-burntSienna focus:outline-burntSienna" placeholder="United States" {...register("country")} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm text-burntSienna font-bold uppercase tracking-wider mt-8 mb-4">payment details</h3>
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0">
                <h4 className="text-xs font-bold capitalize">payment method</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 font-bold px-6 py-5 rounded-lg border border-solid border-[#cfcfcf] cursor-pointer md:w-80" onClick={() => setPayment("e-money")}>
                    <div className="relative w-6 h-6 rounded-full border border-solid border-[#cfcfcf]">
                      {
                        payment === "e-money" ? <div className="absolute w-3 h-3 rounded-full top-1/2 left-1/2 bg-burntSienna -translate-x-1/2 -translate-y-1/2"></div> : null
                      }
                    </div>
                    e-Money
                  </div>
                  <div className="flex items-center gap-4 font-bold px-6 py-5 rounded-lg border border-solid border-[#cfcfcf] cursor-pointer md:w-80" onClick={() => setPayment("cash")}>
                    <div className="relative w-6 h-6 rounded-full border border-solid border-[#cfcfcf]">
                      {
                        payment === "cash" ? <div className="absolute w-3 h-3 rounded-full top-1/2 left-1/2 bg-burntSienna -translate-x-1/2 -translate-y-1/2"></div> : null
                      }
                    </div>
                    Cash on Delivery
                  </div>
                </div>

              </div>
              {
                payment === "e-money" ? <div className="flex flex-wrap gap-6 mt-8">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="e-money-number" className="text-xs font-bold">E-Money Number</label>
                    <input type="text" id="e-money-number" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] caret-burntSienna focus:border-burntSienna focus:outline-burntSienna" placeholder="238521993" {...register("e-money-number")} />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="e-money-pin" className="text-xs font-bold">E-Money PIN</label>
                    <input type="text" id="e-money-pin" className="px-6 py-5 text-sm font-bold rounded-lg border border-solid border-[#cfcfcf] caret-burntSienna focus:border-burntSienna focus:outline-burntSienna" placeholder="6891" {...register("e-money-pin")} />
                  </div>
                </div> : <div className="flex flex-col justify-center items-center text-center gap-6 mt-8 md:flex-row md:text-left">
                  <img src={Cash} alt="cash-on-delivery" className="w-12 h-12" />
                  <p className="font-medium opacity-50">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
              }
            </div>
          </article>
          <article className="bg-white p-8 rounded-lg h-fit">
            <h1 className="text-lg font-bold uppercase tracking-widest mb-8">summary</h1>
            <div className="flex flex-col gap-6">
              {productsElements}
            </div>
            <div className="flex flex-col gap-2 my-8">
              <div className="flex justify-between items-center">
                <h3 className="font-medium opacity-50 uppercase">total</h3>
                <p className="text-lg font-bold">{formatPrice(totalPrice)}</p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-medium opacity-50 uppercase">shipping</h3>
                <p className="text-lg font-bold">{formatPrice(shipping)}</p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-medium opacity-50 uppercase">vat (included)</h3>
                <p className="text-lg font-bold">{formatPrice(vat)}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-medium opacity-50 uppercase">grand total</h3>
              <p className="text-burntSienna text-lg font-bold">{formatPrice(grandTotal)}</p>
            </div>
            <button type="sumbit" className="bg-burntSienna text-white text-sm font-bold py-4 w-full cursor-pointer uppercase tracking-widest hover:bg-peach transition-colors duration-300">continue & pay</button>
          </article>
        </form>
        <DevTool control={control} />
      </div>
    </section>
  );
}

export default Form;
