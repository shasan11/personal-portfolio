import Image from "next/image";
import ServiceAreaCard from "./ui/service-area-card";
import { service } from "@/data/site";

export default function ServiceArea() {
    return (
        <div id="service" className="service-area over-hidden pt-155 pb-140">
            <div className="service-wrapper position-relative">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                            <div className="title text-center">
                                <span className="theme-color f-700 d-block mb-6">
                                    Service
                                </span>
                                <h3>What I Do</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row service-wrappers mt-80">
                        {/* service card start */}
                        {service?.slice(0, 4).map((item, i) => (
                            <ServiceAreaCard key={i} data={item} index={i} />
                        ))}
                        {/* service card end */}
                    </div>
                </div>
                <div className="service-blue-shadow position-absolute left-0 z-index-1">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        className="h-100 w-100"
                        src="/images/slider/shape/service-blue-shadow.png"
                        alt="shadow"
                    />
                </div>

                <div className="service-red-shadow position-absolute right-0 z-index-1">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        className="h-100 w-100"
                        src="/images/slider/shape/service-red-shadow.png"
                        alt="shadow"
                    />
                </div>
                <div className="service-yellow-shadow position-absolute left-0 z-index-1">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        className="h-100 w-100"
                        src="/images/slider/shape/service-yellow-shadow.png"
                        alt="shadow"
                    />
                </div>
            </div>
        </div>
    );
}
