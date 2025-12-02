import { experience2 } from "@/data/site";
import ExperienceList from "./ui/experience-list";
import Image from "next/image";

export default function Experience() {
    return (
        <div className="experience-area pb-165">
            <div className="experience-wrapper extra-width position-relative">
                <div
                    className="experience-bg-img left-0 top-0 bottom-0 bg-cover no-repeat w-50 position-absolute"
                     style={{
    backgroundImage: "url(/images/slider/main-img.jpeg)",
    backgroundPosition: "center",      // center the image
    backgroundRepeat: "no-repeat",     // don't tile
    backgroundSize: "cover",           // or "contain" if you want full image visible
    position: "absolute",
    inset: 0,                          // fill parent (top:0,right:0,bottom:0,left:0)
  }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-none">
                            <div
                                className="experience-img"
                                data-aos="fade-right"
                                data-aos-duration={2000}
                            ></div>
                        </div>
                        <div className="col-xl-6 col-lg-6 offset-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="experience-margin mt-160 pb-80 pl-100 mb-50">
                                <div className="position-relative">
                                    <div className="title">
                                        <span className="theme-color f-700 d-block mb-6 mt--5">
                                            Work Experience
                                        </span>
                                        <h2 className="f-700 mb-20">
                                            My Experience
                                        </h2>
                                        <p>
                                            I build systems that businesses actually depend on — logistics platforms, accounting tools, POS and ERPs. I’m obsessed with stability, clear workflows and clean code, so what I ship doesn’t just look good in a demo, it keeps working when real users push it hard.
                                        </p>
                                    </div>
                                </div>
                                <div className="experience-wrapper pt-25">
                                    <ul className="experience-content">
                                        {/* experience list start */}
                                        {experience2
                                            ?.slice(0, 3)
                                            .map((item, i) => (
                                                <ExperienceList
                                                    key={i}
                                                    data={item}
                                                />
                                            ))}
                                        {/* experience list end */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="experience-blue-shadow position-absolute z-index-1">
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            className="h-100 w-100"
                            src="/images/slider/shape/experience-blue-shadow.png"
                            alt="shadow"
                        />
                    </div>

                    <div className="experience-red-shadow position-absolute right-0 z-index-1">
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            className="h-100 w-100"
                            src="/images/slider/shape/experience-red-shadow.png"
                            alt="shadow"
                        />
                    </div>

                    <div className="experience-yellow-shadow position-absolute right-0 z-index-1">
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            className="h-100 w-100"
                            src="/images/slider/shape/experience-yellow-shadow.png"
                            alt="shadow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
