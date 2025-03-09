function HandleButtonClick(buttonValue, displayValue, setDisplayValue, currentValue, setCurrentValue, prevValue, setPrevValue, operator, setOperator) {

    if (!isNaN(buttonValue) || buttonValue === ".") {
    let newValue = currentValue + buttonValue;

    if (newValue.startsWith("0") && newValue[1] !== ".") {
        newValue = newValue.slice(1);
    }

    setCurrentValue(newValue);
    setDisplayValue(displayValue + buttonValue);

    }
    else if (["+", "-", "*", "/"].includes(buttonValue)) {
        if (currentValue === "" && prevValue === "") return; 

        if (currentValue !== "") {
            setPrevValue(currentValue);
            setCurrentValue("");
        }
        if (operator !== "") {  
            setDisplayValue(displayValue.slice(0, -3) + " " + buttonValue + " ");
        } else {
            setDisplayValue(displayValue + " " + buttonValue + " ");
        }
        setOperator(buttonValue);
    } 
    else if (buttonValue === "=") {
        if (prevValue !== "" && currentValue !== "") {
            const result = eval(prevValue + operator + currentValue);
            setDisplayValue(result);
            setCurrentValue(result);
            setPrevValue("");
            setOperator("");
        }
    } 
    else if (buttonValue === "RESET") {
        setDisplayValue("");
        setCurrentValue("");
        setPrevValue("");
        setOperator("");
    }
    else if (buttonValue === "DEL") {
        if (currentValue.length > 0) {
            setCurrentValue(currentValue.slice(0, -1)); 
            setDisplayValue(displayValue.slice(0, -1)); 
        }
        else if (displayValue.endsWith(" ")) {
            setDisplayValue(displayValue.slice(0, -3)); 
            setOperator("");
            setCurrentValue(prevValue); 
            setPrevValue(""); 
        }
    }
}

export default HandleButtonClick;    