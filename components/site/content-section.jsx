export default function ContentSection({ heading, body, bullets }) {
    return (
        <section className="service-area over-hidden pb-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-10">
                        <div className="single-service neutral-bg border-radius12 pl-40 pr-40 pt-35 pb-35 mb-30">
                            <h4 className="mb-15">{heading}</h4>
                            {body && <p>{body}</p>}
                            {bullets?.length > 0 && (
                                <ul className="pl-20 mb-0">
                                    {bullets.map((bullet, idx) => (
                                        <li key={idx} className="mb-2">{bullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
