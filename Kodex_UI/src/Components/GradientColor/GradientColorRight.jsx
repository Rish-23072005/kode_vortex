import './GradientColorRight.css';

const GradientColorRight = ({top}) => {
  return (
    <div 
      className="glowing-element absolute"
      style={{
        top: top,  // Adjust as needed
        right: '-30%',  // Adjust as needed
        bottom: 'auto',  // Optional, adjust if needed
        left: 'auto',  // Optional, adjust if needed
      }}
    ></div>
  );
};

export default GradientColorRight;