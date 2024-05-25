import Button from "../Button/Button"
import { useState } from 'react'
import { diff } from '../../data'

export default function TabsSection() {
    const [ contentType, setContentType ] = useState(null);

    // let content = 'Click button!';
    

    function handleClick(type) {
        console.log(type);
        setContentType(type);
    }


    return (
        <section>
            <Button active={ contentType === 'way' } onClick={() => handleClick('way')}>Text 1</Button>
            <Button active={ contentType === 'easy' } onClick={() => handleClick('easy')}>Text 2</Button>
            <Button active={ contentType === 'program' } onClick={() => handleClick('program')}>Text 3</Button>

            { contentType  ? <p> { diff[contentType] }</p> : <p>Текст</p> }

            
        </section>
    )
}