import React from 'react';
import Lottie from "react-lottie";
import manRunning from '../../../../../../lotties/man-running.json';
import Marquee from "react-fast-marquee";

const SubNavBanner = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: manRunning,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <React.Fragment>
            <div style={{ zIndex: "99999" }} className="bg-indigo-600 pt-12 ml-0 md:pt-14 lg:pt-14 xl:pt-14">
                <div className="mx-auto py-0 px-0 sm:px-6 lg:px-0">
                    <div className="flex items-center justify-center flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <div className="ml-0 font-medium text-white truncate w-full">
                                <span className="md:inline">
                                    <Marquee gradient={false} speed={70}>
                                        <div className="flex">
                                            <div className="w-4 h-4 mt-4 mb-0 p-0 mr-8 md:ml-0 lg:ml-0 xl:ml-0 ml-64 vert-move">
                                                <img src="./img/rupee.png" id="loading" className="" />
                                            </div>
                                            <div className="mr-4 pt-1">
                                                <Lottie options={defaultOptions} lotti={manRunning} height={25} width={25} />
                                            </div>
                                            <small className="text-white mt-2 fnt-sty-nunito"
                                            >Big news! We're excited to announce a brand new
                                            product.</small
                                            >
                                        </div>
                                    </Marquee>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SubNavBanner;