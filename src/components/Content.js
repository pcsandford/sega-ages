import React, {useState} from 'react'
import { CSSTransition } from "react-transition-group";


const Content = ({consoles}) => {

    //set the selected item to be the first object in the consoles array
    const [selected, setSelected] = useState(0);

    //set the CSSTransition inProp to false
    const [inProp, setInProp] = useState(false);

    //desctructure data from the first object in the consoles array
    const {name, image, year, units} = consoles[selected];

    return (
        <section className="content">

            <article className="content-image">
                <CSSTransition in={inProp} timeout={1000} classNames="image" 
                onEntered={() => setInProp(false)}>
                    <img src={image} alt={name}/>
                </CSSTransition>
                
               
            </article>

            <article className="content-text">
                <h3>{name}</h3> 
                <p>Release Year: <span className="bold">{year}</span></p>
                <p>Worldwide units sold: <span className="bold">{units}</span></p>
            </article>
            
            <div className="buttons">
                    {consoles.map((console, index) => {
                        return <button 
                                    className ={index === selected ? "active" : ""}
                                    key={index} 
                                    onClick={() => {
                                        setSelected(index);
                                        setInProp(true);
                                    }}
                                    >
                                    {console.name}
                                </button>
                    })}
                </div>
        </section>
    )
}

export default Content
