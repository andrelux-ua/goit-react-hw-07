import { ScaleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ScaleLoader loading={true} size={15} color="#152ee5" />
    </div>
  );
};

export default Loader;
