import { useContext, useState } from "react";
import Cash from "../../assets/checkout/icon-cash-on-delivery.svg";
import { Context } from "../../Context";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import ThankYou from "./ThankYou";


const Form = () => {
  const { products, totalPrice, formatPrice } = useContext(Context);
  const [payment, setPayment] = useState("e-Money");
  const [order, setOrder] = useState(false);
  const shipping = 50;
  const vat = 1079;
  const grandTotal = totalPrice + shipping + vat;

  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    if (data) {
      setOrder(true);
    }
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
    <section className="relative mb-24">
        <ThankYou grandTotal={grandTotal} />
      <div className="w-[90vw] max-w-6xl mx-auto grid grid-cols-1">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 lg:flex-row">
          <article className="bg-white p-8 rounded-lg lg:flex-1">
            <h1 className="text-3xl font-bold uppercase tracking-wider">checkout</h1>
            <div className="mb-8">
              <h3 className="text-sm text-burntSienna font-bold uppercase tracking-wider mt-8 mb-4">billing details</h3>
              <div className="flex flex-wrap gap-6">
                <TextInput register={register} label="Name" type="text" name="name" error={errors.name} style="flex-1" placeholder="Alexei Ward" />
                <TextInput register={register} label="Email Address" type="email" name="email" error={errors.email} style="flex-1" placeholder="Alexei@mail.com" />
                <TextInput register={register} label="Phone Number" type="tel" name="phoneNumber" error={errors.phoneNumber} style="w-full" placeholder="+1 202-555-0136" />
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-sm text-burntSienna font-bold uppercase tracking-wider mt-8 mb-4">shipping info</h3>
              <div className="flex flex-wrap gap-6">
                <TextInput register={register} label="Your Address" type="text" name="address" error={errors.address} style="w-full" placeholder="1137 Williams Avenue" />
                <TextInput register={register} label="ZIP Code" type="text" name="zip" error={errors.zip} style="flex-1" placeholder="10001" />
                <TextInput register={register} label="City" type="text" name="city" error={errors.city} style="flex-1" placeholder="New York" />
                <TextInput register={register} label="Country" type="text" name="country" error={errors.country} style="w-full" placeholder="United States" />
              </div>
            </div>
            <div>
              <h3 className="text-sm text-burntSienna font-bold uppercase tracking-wider mt-8 mb-4">payment details</h3>
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0">
                <h4 className="text-xs font-bold capitalize">payment method</h4>
                <div className="flex flex-col gap-4">
                  <RadioInput payment={payment} setPayment={setPayment} name="e-Money" text="e-Money" />
                  <RadioInput payment={payment} setPayment={setPayment} name="cash" text="Cash on Delivery" />
                </div>
              </div>
              {
                payment === "e-Money" ? <div className="flex flex-wrap gap-6 mt-8">
                  <TextInput register={register} label="E-Money Number" type="text" name="eMoneyNumber" error={errors.eMoneyNumber} style="flex-1" placeholder="238521993" />
                  <TextInput register={register} label="E-Money PIN" type="text" name="eMoneyPin" error={errors.eMoneyPin} style="flex-1" placeholder="6891" />
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
