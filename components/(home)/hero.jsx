import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    {
        icon: "fab fa-facebook-f",
        color: "facebook-bg",
        link: "https://www.facebook.com/shasan.dhakal.10/",
    },
    {
        icon: "fab fa-github",
        color: "bg-dark",
        link: "https://github.com/shasan11",
    },
    {
        icon: "fab fa-linkedin-in",
        color: "linkedin-bg",
        link: "https://www.linkedin.com/in/shasan-dhakal/",
    },
    {
        icon: "fab fa-instagram",
        color: "instagram-bg",
        link: "https://www.instagram.com/me_shasan/",
    },
];

export default function Hero() {
    return (
        <div id="home" className="slider-area">
            <div className="single-slider slider-height extra-width position-relative">
                <div
                    className="slider-bg-img position-absolute right-0 top-0 bottom-0 w-50 no-repeat bg-cover"
                    style={{
                        backgroundImage: "url('/images/slider/main-img.jpeg')",
                    }}
                >
                    <div className="slider-social-link position-absolute right-0 d-lg-none d-block">
                        <ul className="social pr-25">
                            {/* social start */}
                            {socialLinks?.map((item, i) => (
                                <li
                                    key={i}
                                    className="mt-10 mb-10 rotate-hover"
                                >
                                    <Link
                                        className="text-white text-center d-inline-block rotate"
                                        href={item.link}
                                    >
                                        <i className={item.icon} />
                                    </Link>
                                </li>
                            ))}
                            {/* social end */}
                        </ul>
                    </div>
                </div>
                <div className="container d-flex align-items-center">
                    <div className="row align-items-center slider-content-height">
                        <div className="col-xl-7 col-lg-8 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="slider-wrapper position-relative">
                                <div className="slider-content text-center text-lg-left mt-45 position-relative z-index11">
                                    <h1
                                        className="mb-30"
                                        data-aos="fade-right"
                                        data-aos-duration={2000}
                                        data-aos-delay={800}
                                    >
                                        Shasan Dhakal
                                    </h1>
                                    <p
                                        data-aos="fade-right"
                                        data-aos-duration={2500}
                                        data-aos-delay={1000}
                                    >
                                        ML Engineer | Software Engineer | Web
                                        Developer based in the Kathmandu
                                    </p>
                                    <Link
                                        href="/"
                                        className="btn position-relative over-hidden theme-bg text-white text-capitalize mt-35"
                                        data-aos="fade-up"
                                        data-aos-duration={1000}
                                    >
                                        Say Hello
                                    </Link>
                                </div>
                                {/* /slider-content */}
                                <div className="slider-content-shape shape shape-up-down-animation position-absolute">
                                    <img
                                        src="/images/slider/shape/shape1.png"
                                        alt=""
                                    />
                                </div>
                                {/* /shape */}
                                <div className="slider-yellow-shadow position-absolute z-index-1">
                                    <img
                                        src="images/slider/shape/slider-yellow-shadow.png"
                                        alt=""
                                    />
                                </div>
                                {/* /yellow-shadow */}
                                <div className="slider-blue-shadow position-absolute">
                                    <img
                                        src="images/slider/shape/slider-blue-shadow.png"
                                        alt=""
                                    />
                                </div>
                                {/* /blue-shadow */}
                                <div className="slider-red-shadow position-absolute">
                                    <img
                                        src="images/slider/shape/slider-red-shadow.png"
                                        alt=""
                                    />
                                </div>
                                {/* /red-shadow */}
                            </div>
                        </div>
                    </div>
                    <div className="slider-social-link position-absolute right-0 d-none d-lg-block">
                        <ul className="social pr-25">
                            {/* social start */}
                            {socialLinks?.map((item, i) => (
                                <li
                                    key={i}
                                    className="mt-10 mb-10 rotate-hover"
                                >
                                    <Link
                                        className="text-white text-center d-inline-block rotate"
                                        href={item.link}
                                    >
                                        <i className={item.icon} />
                                    </Link>
                                </li>
                            ))}
                            {/* social end */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
