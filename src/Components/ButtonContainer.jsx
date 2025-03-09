function ButtonContainer({HandleButtonClick}){
    const BtnList=[["1","2","3","DEL"],
    ["4","5","6","+"],
    ["7","8","9","-"],
    [".","0","/","*"],
    ["RESET","="]];
    return(
        <>
             {BtnList.map((btnList,rowIndex)=>(
                <div key={rowIndex} className='button-row'>
                {btnList.map((btn,btnIndex)=>(
                    <button key={btnIndex} onClick={()=>HandleButtonClick(btn)}>{btn}</button>
                ))}   
                </div>               
             ))}
        </>
    )
}

export default ButtonContainer ;
