export default function PageHeader({ heading, subheading }) {
    return (
        <section className="about-area over-hidden pt-160 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title text-center mb-35">
                            <span className="theme-color f-700 d-block mb-6">Shasan Dhakal</span>
                            <h2 className="mb-20">{heading}</h2>
                            {subheading && <p className="mx-auto" style={{ maxWidth: "860px" }}>{subheading}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
