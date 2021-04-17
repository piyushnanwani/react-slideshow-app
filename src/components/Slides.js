import React, {useState} from 'react';

function Slides({slides}) {
    const [slideIdx, setSlideIdx] = useState(0);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={()=>setSlideIdx(0)} disabled={slideIdx===0? true: false}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={()=>setSlideIdx(slideIdx-1)} disabled={slideIdx===0? true: false} >Prev</button>
                <button data-testid="button-next" className="small" onClick={()=>setSlideIdx(slideIdx+1)} disabled={slideIdx===slides.length-1? true: false}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slideIdx].title}</h1>
                <p data-testid="text">{slides[slideIdx].text}</p>
            </div>
        </div>
    );

}

export default Slides;
