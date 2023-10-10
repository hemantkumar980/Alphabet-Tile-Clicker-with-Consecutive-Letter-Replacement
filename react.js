import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px',

  },
  letter: {
    float: 'left',
    padding: '10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
};

function Tile(props) {
  const { letter, onClick } = props;
  return (
    <button style={style.letter} onClick={() => onClick(letter)}>
      {letter}
    </button>
  );
}

function Application() {
  const [outputString, setOutputString] = useState('');


  const handleClick = (letter) => {
    const newOutputString = outputString + letter;

    // Check for 3 consecutive identical letters and replace them with an underscore
    if (newOutputString.match(/(.)\1\1/)) {
      const updatedOutputString = newOutputString.replace(/(.)\1\1/g, '_');
      setOutputString(updatedOutputString);
    } else {
      setOutputString(newOutputString);
    }
  };

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
          <Tile key={letter} letter={letter} 

onClick={handleClick} />
        ))}
      </aside>
      <div id="outputString">{outputString}</div>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);
