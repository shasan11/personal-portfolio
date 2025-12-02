"use client";
import CountUp from "react-countup";

export default function FunFact() {
    return (
        <div
            className="fun-fact-area fun-fact-bg over-hidden pt-105 pb-80"
            data-aos="fade-up"
            data-aos-duration={1800}
        >
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12 ">
                        <div className="single-fact d-flex d-sm-block d-lg-flex align-items-center mb-30">
                            <div className="mr-25">
                                <span className="theme-color f-700 d-inline-block counter">
                                    <CountUp end={5} enableScrollSpy={true} />+
                                </span>
                            </div>
                            <p className="text-white f-700 mb-0">
                                Years of <br /> Experience
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12  d-lg-flex justify-content-center">
                        <div className="single-fact d-flex d-sm-block d-lg-flex align-items-center mb-30">
                            <div className="mr-25 d-flex align-content-start">
                                <span className="theme-color f-700 d-inline-block counter">
                                    <CountUp end={200} enableScrollSpy={true} />
                                </span>
                                <span className="per d-inline-block f-700 theme-color mt-1">
                                    +
                                </span>
                            </div>
                            <p className="text-white f-700 mb-0">
                                Worldwide <br /> Clients
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12 d-lg-flex justify-content-end">
                        <div className="single-fact d-flex d-sm-block d-lg-flex align-items-center mb-30">
                            <div className="mr-25 d-flex align-content-start">
                                <span className="theme-color f-700 d-inline-block counter">
                                    <CountUp end={300} enableScrollSpy={true} />
                                </span>
                                <span className="theme-color f-700 d-inline-block">
                                    +
                                </span>
                                 
                            </div>
                            <p className="text-white f-700 mb-0">
                                Total <br /> Projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
