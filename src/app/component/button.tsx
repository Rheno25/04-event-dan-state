export function Button_2({messageContent, buttonName}){
    return(
        <button 
            className="bg-blue-500 hover : bg-blue-700 text-white p-2 rounded"
            onClick={() => alert(messageContent)}>
            {buttonName}
        </button>
    );
}

export default function Button_1(){
    function handleClick(){
        alert("Button has been clicked!!!");
    }
}