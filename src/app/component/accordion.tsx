import { useState } from "react";

export default function Accordion(){
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                With a population of around 2 million people, Almaty is the biggest city in Kazakhstan.
                From the year 1929 to 1997, this city has become the capital of Kazakhstan.
            </Panel>
            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                The name "Almaty" comes from the word <span lang="kk-KZ">Алма</span>, in Kazakh language which means "apple" and
                often interpreted as "full with apple". Actually, the are around Almaty are believed as
                the origin of apple, and wild <i lang="la">Malus sieversii</i> are considered as candidate
                that probably has become the ancestor of modern domestic apple.
            </Panel>
        </>
    );
}

function Panel({title, children, isActive, onShow}){
    return (
        <section className="panel border border-gray-700 p-2">
            <h3>{title}</h3>
            {isActive ? ( <p>{children}</p> ) : ( <button className="bg-blue-400 text-xs text-white p-1 rounded m-2" onClick={onShow}>Display</button> )}
        </section>
    );
}