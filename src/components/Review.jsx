import React, { useState } from 'react'
import data from "../components/data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = data[index]
    console.log(data);

    const prevPerson = () => {
        console.log('Prev Person Clicked');
        let newIndex = index - 1;
        setIndex(newIndex);
        if (newIndex < 0) {
            setIndex(data.length - 1);
        }

    }
    const nextPerson = () => {
        console.log('next Person Clicked');
        let newIndex = index + 1;
        setIndex(newIndex);
        if (newIndex > data.length - 1) {
            setIndex(0);
        }
    }

    const randomPerson = () => {

        let newRandomIndex = Math.floor(Math.random() * data.length);
        console.log('Random Person got Clicked!', newRandomIndex);
        setIndex(newRandomIndex)


    }

    return (
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                surprise me
            </button>
        </article>
    )
}

export default Review