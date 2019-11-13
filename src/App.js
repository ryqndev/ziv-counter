import React, {useEffect, useState} from 'react';
import Theme from './Theme'; 
import Toggle from './components/Toggle';
import counts from './assets/Zivstory.json';
import './App.css';

function App() {
    const [dark, toggleDark] = useState(true);

    const zivImage = `https://www.informatics.uci.edu/wp-content/informatics/uploads/FacultyProfiles-Ziv.jpg`;
    const lastMention = new Date(counts[counts.length - 1]);

    useEffect(() => {
        Theme(dark);
    }, [dark]);

    return (
        <div className="ziv-law--wrapper">
            <div className="ziv-law--toggle">
                <Toggle cur={dark} set={toggleDark}/>
            </div>  
            <div className="ziv-law--title">
                <img className="ziv-law--image" alt="Hadar Ziv" src={zivImage} />
                <br />
                Number of times Ziv has mentioned Ziv's Law:
            </div>
            <div className="ziv-law--counter">
                {counts.length}
            </div> 
            <div className="ziv-law--footer">
                Last mention : {lastMention.toDateString()} at {lastMention.toTimeString()}
            </div>
        </div>
    );
}

export default App;
