
function Buttton({ color, text, bgc, onClick }) {

  return (
    
    <button style={{ color: color, backgroundColor: bgc }} onClick={onClick}>
      {text}
    </button>
  );
  
}

export default Buttton;
