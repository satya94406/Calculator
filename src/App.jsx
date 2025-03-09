import { useState } from 'react';
import './App.css';
import ButtonContainer from './Components/ButtonContainer';
import HandleButtonClick from './Components/Button_Logic';

function App() {
    const [displayValue, setDisplayValue] = useState("");  
    const [currentValue, setCurrentValue] = useState(""); 
    const [operator, setOperator] = useState("");         
    const [prevValue, setPrevValue] = useState("");       

    return (
        <>
            <div className='nav'>
                <input type='text' className='input-field' value={displayValue} readOnly />
                <ButtonContainer 
                    HandleButtonClick={(btn) => HandleButtonClick(btn, displayValue, setDisplayValue, currentValue, setCurrentValue, prevValue, setPrevValue, operator, setOperator)} 
                />
            </div>
        </>
    );
}

export default App;
