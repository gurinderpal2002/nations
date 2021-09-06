import React, {useState, useCallback, useEffect} from 'react';
import Img1 from './img/bd.png';
import Img2 from './img/ml.jpg';
import Img3 from './img/tr.jpg';


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);
    const [dots, setDots] = useState([]);


    const sliderRef = useCallback(node => {
        if (node !== null) {

          const nodesArray = Array.from(node.children);

          const sl = nodesArray.filter( n => n.classList[0] === 'slider-slide');

          setSlides(sl);
        }
      }, []);


    const dotsRef = useCallback(node => {
        if (node !== null) {

          const nodesArray = Array.from(node.childNodes);
          setDots(nodesArray);

          
        }
      }, []);



      useEffect(() => {
        goToSlide(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[slides]);



    const goToSlide = (slide) => {

        changeActiveDot(slide);

        slides.forEach(
            (s,i) => (s.style.transform = `translateX(${100 * (i-slide)}%)`)
        );
    };


    const changeSlide = (direction) => {

        if(currentSlide === 0 && direction === "left")
        {
            setCurrentSlide(slides.length - 1);
            return;
        }

        if(currentSlide === slides.length - 1 && direction === "right")
        {

            setCurrentSlide(0);
            return;
        }

        if(direction === "left")
        {
            setCurrentSlide(currentSlide - 1);
            
        }
        else if(direction === "right")
        {
            setCurrentSlide(currentSlide + 1);
            
        }
        
    }


    const handleKey = e => {

        
        if(currentSlide === 0 && e.code === "ArrowLeft")
        {
            setCurrentSlide(slides.length - 1);
            return;
        }

        if(currentSlide === slides.length - 1 && e.code === "ArrowRight")
        {

            setCurrentSlide(0);
            return;
        }


        if(e.code === "ArrowRight"){
            setCurrentSlide(currentSlide + 1);

        }
        else if(e.code === "ArrowLeft"){
            setCurrentSlide(currentSlide - 1);
        }
      }


      const changeActiveDot = (slide) => {

        if(dots.length > 0)
        {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slide].classList.add('active');
        }
        
      }


      const onDotClick = (e) => {
          if(e.target.classList.contains("dots__dot"))
          {
              setCurrentSlide(e.target.dataset.slide);
              changeActiveDot(e.target.dataset.slide);
              
          }
      }

    return(
                <div tabIndex="0" ref={sliderRef} className="slider" onKeyDown={e => handleKey(e)}>
                    {goToSlide(currentSlide)}

                    <div className="slider-slide">
                        <div className="quote">
                            <img src={Img2} alt="Martin Luther King Jr." className="quote__photo" />
                            <div className="quote__content">
                                <blockquote className="quote__content--text">
                                Ultimately a great nation is a compassionate nation.
                                </blockquote>
                                <h3 className="quote__content--name heading-tertiary">Martin Luther King Jr.</h3>
                            </div>
                        </div>
                    </div>


                    <div className="slider-slide">
                        <div className="quote">
                            <img src={Img3} alt="Thedore Roosevolt" className="quote__photo" />
                            <div className="quote__content">

                                <blockquote className="quote__content--text">
                                It is not what we have that will make us a great nation;
                                it is the way in which we use it.
                                </blockquote>
                                <h3 className="quote__content--name heading-tertiary">Theodore Roosevolt</h3>
                            </div>

                        </div>
                    </div>

                    
                    <div className="slider-slide">
                        <div className="quote">
                            <img src={Img1} alt="Benjamin Franklin" className="quote__photo" />
                                <div className="quote__content">
                                <blockquote className="quote__content--text">
                                    Great countries are those that produce great people.
                                </blockquote>
                                <h3 className="quote__content--name heading-tertiary">Benjamin Disraeli</h3>
                            </div>
                            
                        </div>
                    </div>



                <button id="left" className="slider__btn slider__btn--left" onClick={e => changeSlide(e.target.id)}>&larr;</button>
                <button id="right" className="slider__btn slider__btn--right" onClick={e => changeSlide(e.target.id)}>&rarr;</button>
                <div ref={dotsRef} className="dots" onClick={e => onDotClick(e)}>
                   <button className="dots__dot active" data-slide="0"></button>
                   <button className="dots__dot" data-slide="1"></button> 
                   <button className="dots__dot" data-slide="2"></button> 
                </div>

            </div>

    
    );

}



export default Slider;