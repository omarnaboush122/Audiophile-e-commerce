import { useNavigate } from 'react-router-dom';

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[90vw] max-w-6xl mx-auto'>
      <button onClick={() => navigate(-1)} className="text-black font-medium opacity-50 capitalize my-6 md:my-12">go back</button>
    </div>
  );
}

export default GoBack;
