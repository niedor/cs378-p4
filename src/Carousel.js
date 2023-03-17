import React, { useState } from "react";

import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [buttonColors, setButtonColors] = useState(["white", "#ECA869", "#ECA869"])

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    }

    let handleClick = (index) => {
        updateIndex(index);
        
        setButtonColors((buttons) => buttons.map((o, i) => {
            if (index === i) return "white";
            return "#ECA869";
        }));
    }

    return (
        <div className="carousel">
            <div className="indicators">
                <button className="list-button" onClick={() => {handleClick(0)}} style={{ 'background-color': buttonColors[0] }} >Week</button>
                <button className="list-button" onClick={() => {handleClick(1)}} style={{ 'background-color': buttonColors[1] }} >Month</button>
                <button className="list-button" onClick={() => {handleClick(2)}} style={{ 'background-color': buttonColors[2] }} >Year</button>
            </div>

            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>
        </div>
    );
};

export default Carousel;