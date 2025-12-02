"use client";
import Image from "next/image";
import { Tilt } from "react-tilt";
import AboutInfo from "./ui/about-info";

const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function AboutArea() {
    return (
        <div id="about" className="about-area mt-170 mb-105">
            <div className="about-content-wrapper position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 offset-md-0 col-sm-11 offset-sm-1 col-12">
                            <div className="about-img-wrapper position-relative mb-100">
                                <div
                                    className="about-img position-relative z-index11"
                                    data-aos="fade-right"
                                    data-aos-duration={2000}
                                    data-aos-delay={300}
                                >
                                    <div className="about-img-over over-hidden transition5 d-inline-block position-relative">
                                        <Tilt options={defaultOptions}>
                                            <Image
                                                height={600}
                                                width={488}
                                                className="img-grayscale border-radius12 position-relative z-index11 h-100 w-auto tilt"
                                                src="/images/about/image.png"
                                                alt="person"
                                            />
                                        </Tilt>
                                    </div>
                                </div>
                                {/* /about-img */}
                                <div
                                    className="about-color-shape-bg theme-bg position-absolute tilt"
                                    data-aos="fade-right"
                                    data-aos-duration={2500}
                                />
                                <div
                                    className="about-color-shape-bg secondary-bg position-absolute z-index-1 tilt"
                                    data-aos="fade-right"
                                    data-aos-duration={2600}
                                />
                            </div>
                            {/* /about-img-wrapper */}
                        </div>
                        <div className="col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12">
                            <AboutInfo />
                        </div>
                    </div>
                </div>
                <div className="about-yellow-shadow position-absolute right-0 z-index-1">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        src="/images/slider/shape/about-yellow-shadow.png"
                        className="h-100 w-100"
                        alt="shadow"
                    />
                </div>
                <div className="about-blue-shadow position-absolute right-0 z-index-1">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        src="/images/slider/shape/about-blue-shadow.png"
                        className="h-100 w-100"
                        alt="shadow"
                    />
                </div>
            </div>
        </div>
    );
}
