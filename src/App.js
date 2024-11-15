// import React from 'react';
// import './App.css';
// import './styles/App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Memecoin Website</h1>
//         <div className="content">
//           <section className="text-section">
//             <textarea placeholder="Enter main description" />
//             <textarea placeholder="Enter tokenomics" />
//             <textarea placeholder="Enter roadmap" />
//           </section>
          
//           <section className="links-section">
//             <input type="text" placeholder="Buy Link" />
//             <input type="text" placeholder="Chart Link" />
//             <input type="text" placeholder="Social Media Link" />
//           </section>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import './App.css';
import memeImage from './assets/kam.jpg'; // You'll add your image later

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memecoin Website</h1>
        <div className="content">
          <section className="text-section">
            <textarea placeholder="Enter main description" />
            <textarea placeholder="Enter tokenomics" />
            <textarea placeholder="Enter roadmap" />
          </section>
          
          <section className="image-section">
            <img 
              src={memeImage} 
              alt="Memecoin Logo" 
              className="meme-image"
            />
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;