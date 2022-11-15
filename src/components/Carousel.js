import React,{useState} from 'react'
import { Data } from './Data';
import '../styles/Carousel.scss'
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

const Carousel = ({slides}) => {
    const [current,setCurrent] = useState(0);

    const length = slides.length

    return (
        <section className='car'>
            <div className="arrows">
                <MdOutlineArrowBack className='left' onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}/>
                <MdOutlineArrowForward className='right' onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}/>
            </div>
            
            {Data.map((slide,index) => {
                return (
                    <div className={index === current ? 'carousel active' : 'carousel'}>
                        {index === current && (
                            <div className={slide.className}>
                                <div className="texts">
                                <p className='title'>{slide.title}</p>
                                <p>{slide.text}</p>
                                </div>
                                <img src={slide.image} alt="" />
                                </div>
                        )}
                    </div>
                )
            })}

            
            
                    
            
            
        </section>
    )
}

export default Carousel
