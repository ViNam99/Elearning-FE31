import React, {useState} from 'react';
import { 
    Container,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'reactstrap';
const prefix="slider"
const items = [
    {
        src:"../../../assets/img/3.jpg",
        altText:'Quoc Duy',
        caption:'hiihihihihihihihihihi'
    },
    {
        src:"../../../assets/img/3.jpg",
        altText:'Quoc Duy',
        caption:'hiihihihihihihihihihi'
    },
    {
        src:"../../../assets/img/3.jpg",
        altText:'Quoc Duy',
        caption:'hiihihihihihihihihihi'
    }
]
const ClientSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

    return (
        <div className={prefix}>
            <Container>
                <div className={`${prefix}__wrapper`}>
                <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
                </div>
            </Container>
        </div>
    );
};

export default ClientSlider;