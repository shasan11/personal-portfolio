export default function EducationList({ data }) {
    const { start, end } = data.date || {};

    return (
        <li className="mb-32 d-flex align-items-start rotate-hover">
            <div className="experience-ser-icon theme-bg d-inline-block text-center mt-10 mr-30">
                <span className="white-text d-inline-block">
                    <span
                        className={`d-block rotate flat-family ${data.icon}`}
                    />
                </span>
            </div>
            <div className="experience-service-text d-inline-block">
                <h5 className="mb-2">{data.title}</h5>
                <h6>
                   {data.location}{" "}
                    <span className="meta-text-color openS-font-family">
                        ( {start} - {end} )
                    </span>
                </h6>
                <p className="mb-0 mt-15">{data.description}</p>
            </div>
        </li>
    );
}
