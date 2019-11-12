import React from 'react';
import counts from './Ziv.js';
import './App.css';

function App() {
    return (
        <div className="ziv-law--wrapper">
            <div className="ziv-law--title">
                Number of times Ziv has mentioned Ziv's Law:
            </div>
            <div className="ziv-law--counter">
                {counts.length}
            </div>  
        </div>
    );
}

export default App;
