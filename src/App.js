import React, {useState} from 'react';
import './App.css';

function App() {
    const [zivCounter, setZivCounter] = useState(1);

    return (
        <div className="ziv-law--wrapper">
            <div className="ziv-law--title">
                Number of times Ziv has mentioned Ziv's Law:
            </div>
            <div className="ziv-law--counter">
                {zivCounter}
            </div>  
        </div>
    );
}

export default App;
