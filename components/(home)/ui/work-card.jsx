"use client";
import { addWorkInfo } from "@/redux/features/work/workSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function WorkCard({ data }) {
    const dispatch = useDispatch();

    // Allow filter to be string ("dev photography") or array(["dev","photography"])
    const filterClasses = Array.isArray(data.filter)
        ? data.filter.join(" ")
        : data.filter || "";

    const handleClick = () => {
        // Send the whole object (with description, stack, etc.) to Redux
        dispatch(addWorkInfo(data));
        // You are already using data-toggle / data-target for modal
    };

    return (
        <div
            className={`col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item ${filterClasses}`}
        >
            <div className="single-portfolio position-relative over-hidden mb-24">
                <img
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="img-grayscale w-100 h-100"
                    src={data.imgUrl}
                    alt={data.title || "work"}
                />

                {/* CLICK OVERLAY */}
                <div
                    className="port-content text-center position-absolute transition5 z-index11"
                    onClick={handleClick}
                    data-toggle="modal"
                    data-target="#workModal"
                >
                    <span className="theme-color d-inline-block">
                        <i className="far fa-external-link-alt" />
                    </span>
                </div>

                {/* TEXT OVERLAY */}
                <div className="port-over-content position-absolute left-0 pl-40 pr-40 pb-30 pt-40">
                    {/* Optional subtitle / category */}
                    {data.subtitle && (
                        <span className="text-white-50 f-600 mb-1 d-block text-uppercase small">
                            {data.subtitle}
                            {data.year && ` · ${data.year}`}
                        </span>
                    )}

                    <span className="text-white f-700 mb-2 d-block text-uppercase">
                        {data.title}
                    </span>

                    <h5 className="text-white mb-2">{data.brief}</h5>

                    {/* Optional dynamic tags (services/stack) */}
                    {Array.isArray(data.services) && data.services.length > 0 && (
                        <div className="d-flex flex-wrap mt-2">
                            {data.services.slice(0, 3).map((service) => (
                                <span
                                    key={service}
                                    className="badge badge-light mr-2 mb-2 text-uppercase small"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
