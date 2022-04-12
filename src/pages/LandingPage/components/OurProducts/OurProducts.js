import React from 'react';

const OurProduct = () => {
    return (
        <React.Fragment>
            <div className="w-full h-screen relative py-20">
                <div className="absolute w-full h-full z-10 ">
                </div>
                <video className="w-full h-64 lg:h-screen object-cover -mt-8" loop="true" autoplay="autoplay" muted >
                    <source className="h-screen object-contain" src="/videos/ourpro.mp4" type="video/mp4" ></source>
                </video>
            </div>
        </React.Fragment>
    )
}

export default OurProduct;