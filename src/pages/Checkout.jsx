import Form from "../components/Checkout/Form";
import Summary from "../components/Checkout/Summary";
import GoBack from "../components/ProductDetail/GoBack";


const Checkout = () => {
  return (
    <main>
      <GoBack />
      <section>
        <div className="w-[90vw] max-w-6xl mx-auto grid grid-cols-1 gap-8">
          <Form />
          <Summary />
        </div>
      </section>
    </main>
  );
}

export default Checkout;
