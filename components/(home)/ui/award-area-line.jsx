import Image from "next/image";
import Link from "next/link";

export default function AwardAreaLine({ data, index }) {
    const { i, length } = index || {};

    return (
        <div
            className={`row align-items-start theme-border-top award-margin pt-40 pb-35 ${
                i == length ? "theme-border-bottom" : ""
            }`}
        >
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-11 col-12">
                <div className="award-logo mt-10 mb-20">
                    <Link href="/" className="d-block">
                        <Image
                            height={39}
                            width={124}
                            src={data.logoUrl}
                            alt="award logo 1"
                            className="h-auto w-auto"
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                            }}
                        />
                    </Link>
                </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-11 col-12">
                <div className="award-content">
                    <h5 className="mb-10">{data.title}</h5>
                    <p className="meta-text-color">{data.year}</p>
                </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-11 col-12">
                <div className="award-content">
                    <h5 className="mb-10">{data.association}</h5>
                   <a href={data.location}>Click Here</a>
                </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-11 col-12">
                <div className="award-content">
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
}
