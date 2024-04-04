export default function Button_1(){
    function handleClick(){
        alert("Button has been clicked!!!");
    }

    function handleMouseOver(){
        alert("Do you want to press this button?");
    }

    return(
        <button 
            className="bg-blue-500 hover : bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            onMouseOver={handleMouseOver}
        >
            This is a button
        </button>
    )
}