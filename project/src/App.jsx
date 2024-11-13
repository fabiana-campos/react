import React, { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        onClick={toggleText}
        style={{
          backgroundColor: isVisible ? 'green' : 'initial',
          color: 'white',
          fontSize: '16px',
        }}
      >
        {isVisible ? 'Voltar' : 'Botão'} 
      </button>
      {isVisible && <p>textotextotextotexto</p>}
    </div>
  );
}

export default App;
