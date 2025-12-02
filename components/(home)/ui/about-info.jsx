import Image from "next/image";

export default function AboutInfo() {
    return (
        <div className="about-content position-relative mb-50">
            <div className="position-relative">
                <div className="title">
                    <span className="theme-color f-700 d-block mb-6 mt--5">
                        About Me
                    </span>
                    <h3 className="f-700 mb-30">I Develop System that Works</h3>
                </div>
                <div className="skill-shape shape shape-up-down-animation position-absolute">
                    <Image
                        height={30}
                        width={41}
                        src="/images/slider/shape/shape2.png"
                        alt="shape"
                    />
                </div>
            </div>
            <p className="mb-25">
        I’m a full-stack developer and founder of Cortifox Systems, focused on
        building real-world systems for logistics, education, hospitals, and
        businesses that need software which actually runs in production, not
        just looks fancy in demos.
      </p>
      <p>
        I work across Django, React, Laravel and modern cloud tooling to design,
        build and ship multi-tenant ERPs, management systems and custom
        solutions for clients in Nepal and abroad. My goal is simple: ship
        stable, maintainable systems that solve real business problems and scale
        with growth.
      </p>
            <div className="about-info-wrapper pt-10">
                <div className="row">
                    <div className="col-xl-6  col-lg-12  col-md-6  col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-45">
                                <p className="primary-color f-700 mb-6">Name</p>
                                <p className="primary-color f-700 mb-6">Age</p>
                                <p className="primary-color f-700 mb-6">
                                    Occupation
                                </p>
                                <p className="primary-color f-700 mb-6">
                                    Education
                                </p>
                            </li>
                            <li className="d-inline-block">
                                <p className="mb-6">Shasan Dhakal</p>
                                <p className="mb-6">23 Years</p>
                                <p className="mb-6">Product Manager</p>
                                <p className="mb-6">B.Sc Computing</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-6  col-lg-12  col-md-6  col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-3">
                                <p className="primary-color f-700 mb-6">
                                    Phone
                                </p>
                                <p className="primary-color f-700 mb-6">
                                    Email
                                </p>
                                <p className="primary-color f-700 mb-6">
                                    Nationality
                                </p>
                                <p className="primary-color f-700 mb-6">
                                    Freelance
                                </p>
                            </li>
                            <li className="d-inline-block">
                                <p className="mb-6">9847693119</p>
                                <p className="mb-6">shasandkl4@gmail.com</p>
                                <p className="mb-6">Nepalese</p>
                                <p className="mb-6">Available</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
