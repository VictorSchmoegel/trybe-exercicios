import Image from './image';
import React from 'react';
import staringCat from './staringCat.jpg';

function App() {
  return (
    <main>
      <Image source={ staringCat } alternativeText='Cute car staring' />
    </main>

  );
}

export default App;
