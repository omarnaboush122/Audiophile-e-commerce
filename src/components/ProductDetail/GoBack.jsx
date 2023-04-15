import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GoBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='w-[90vw] max-w-6xl mx-auto' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
      <button onClick={() => navigate(-1)} className="text-black font-medium opacity-50 capitalize my-6 md:my-12">go back</button>
    </div>
  );
}

export default GoBack;
