import React, { useState } from 'react'
import { BsFillEmojiSmileFill, BsFillEmojiSmileUpsideDownFill} from 'react-icons/bs'
import './Accordion.css'
const Accordion = ({ title, info }) => {

    const [isActive, setActive] = useState(false)

    return (
        <article 
        className='question'
        onClick={() => setActive(!isActive)}>
            <header>
                <h4
                    className='question-title'>
                    {title}
                </h4>
                <button
                    className='btn'
                    onClick={() => setActive(!isActive)}>
                    {isActive ? <BsFillEmojiSmileUpsideDownFill className='minus' /> : <BsFillEmojiSmileFill className='plus'/>}
                </button>
            </header>
            {isActive && <p>{info}</p>}
        </article>
    )
}

export default Accordion;