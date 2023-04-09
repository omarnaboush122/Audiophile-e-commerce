import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data.json";

const ProductDetail = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  console.log(data);

  const { tablet } = data[id].categoryImage;
  const { name } = data[id];
  return (
    <section>
      <div className="w-[90vw] max-w-6xl mx-auto">
        <button onClick={() => navigate(-1)} className="text-black font-medium opacity-50 capitalize my-6">go back</button>
        <article className="flex flex-col gap-8">
          <img src={tablet} alt={name} />
        </article>
      </div>
    </section>
  );
}

export default ProductDetail;
