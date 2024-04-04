import { sculptureList } from "../data/article";
import { useState } from "react";

export default function Gallery(){
    const [index, setIndex] = useState(0);

    function handleClick(){
        setIndex(index + 1);
    }

    let sculpture = sculptureList[index];

    return(
        <>
        <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Next Article
        </button>
        <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
        <h3> ({index + 1} from {sculptureList.length}) </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>
            {sculpture.description}
        </p>
        </>
    );
}