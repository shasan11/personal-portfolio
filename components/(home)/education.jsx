import Image from "next/image";
import EducationList from "./ui/education-list";
import { education } from "@/data/site";

export default function Education() {
    return (
        <div className="education-area">
            <div className="container">
                <div className="row position-relative">
                    <div className="col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12">
                        <div className="position-relative">
                            <div className="title">
                                <span className="theme-color f-700 d-block mb-1 mt--8">
                                    Education
                                </span>
                                <h2 className="f-700 mb-20">My Education</h2>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    kobita tumi sopno charini hoye khbor nio na
                                    sit voluptatem accusantium dolore.
                                </p>
                            </div>
                        </div>
                        <div className="education-wrapper mr-20 pt-25 mb-50">
                            <ul className="education-content">
                                {/* education list start */}
                                {education?.slice(0, 3).map((item, i) => (
                                    <EducationList key={i} data={item} />
                                ))}
                                {/* education list end */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div
                            className="education-img position-relative text-center aos-init aos-animate"
                            data-aos="fade-left"
                            data-aos-duration={2000}
                        >
                            <Image
                                height={648}
                                width={479}
                                className="border-radius12 w-100 h-100"
                                src="/images/education/education-img.png"
                                alt="education image"
                            />
                        </div>
                    </div>
                    <div className="skill-shape shape shape-up-down-animation position-absolute">
                        <img
                            src="/images/slider/shape/shape2.png"
                            alt="shape"
                        />
                    </div>
                </div>
                <div className="theme-border-bottom pt-145"></div>
            </div>
        </div>
    );
}
