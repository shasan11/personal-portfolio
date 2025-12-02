"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

// Default/fallback tags if a project doesn't define its own
const defaultTags = [
    { name: "Web Design", url: "/" },
    { name: "Social Media", url: "/" },
    { name: "Product", url: "/" },
];

// Default/fallback social links
const defaultSocial = [
    {
        url: "/",
        icon: "fab fa-facebook-f",
        color: "facebook-color",
    },
    {
        url: "/",
        icon: "fab fa-twitter",
        color: "twitter-color",
    },
    {
        url: "/",
        icon: "fab fa-google-plus-g",
        color: "google-plus-color",
    },
    {
        url: "/",
        icon: "fab fa-linkedin-in",
        color: "linkedin-color",
    },
];

export default function WorkModal() {
    const { workInfo } = useSelector((state) => state.work);

    if (!workInfo) return null;

    const {
        imgUrl,
        title,
        brief,
        description,
        extraParagraphs, // optional: array of extra text blocks
        client,
        duration,
        tasks, // string or array
        budget,
        projectType,
        year,
        location,
        link,
        tags,
        socialLinks,
    } = workInfo;

    const activeTags = tags && tags.length ? tags : defaultTags;
    const activeSocial = socialLinks && socialLinks.length ? socialLinks : defaultSocial;

    const normalizedTasks = Array.isArray(tasks) ? tasks.join(", ") : tasks;

    return (
        <div
            className="modal fade"
            id="workModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="workModal"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {/* CLOSE BUTTON */}
                    <div className="close-icon float-right pt-10 pr-10">
                        <button
                            type="button"
                            className="close d-inline-block"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">
                                <i className="fa fa-times" />
                            </span>
                        </button>
                    </div>

                    <div className="modal-content border-0">
                        <div className="modal-body pl-50 pr-50 pt-10 pb-20">
                            {/* IMAGE */}
                            <div className="blog-modal-img">
                                <Image
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    className="img-grayscale h-auto w-100"
                                    src={imgUrl}
                                    alt={title || "project image"}
                                    style={{
                                        height: "634px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>

                            <div className="row">
                                {/* LEFT: TEXT CONTENT */}
                                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                    <div className="content-wrapper mt-40">
                                        {/* Title / brief */}
                                        <h4 className="modal-title f-700">
                                            {brief || title}
                                        </h4>

                                        {/* Main description */}
                                        {description && <p>{description}</p>}

                                        {/* Optional extra paragraphs if you store them as array */}
                                        {Array.isArray(extraParagraphs) &&
                                            extraParagraphs.map((para, idx) => (
                                                <p
                                                    key={idx}
                                                    className={idx === extraParagraphs.length - 1 ? "mb-0" : ""}
                                                >
                                                    {para}
                                                </p>
                                            ))}
                                    </div>
                                </div>

                                {/* RIGHT: META INFO */}
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                    <div className="meta-wrapper form-bg pt-80 pb-100 pr-20 pl-40 mt-40 mb-10">
                                        <ul className="item-meta">
                                            <li>
                                                Project Type :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    {projectType || title || "—"}
                                                </span>
                                            </li>

                                            {year && (
                                                <li>
                                                    Year :
                                                    <span className="pl-2 black-color f-700 f-poppins">
                                                        {year}
                                                    </span>
                                                </li>
                                            )}

                                            {location && (
                                                <li>
                                                    Location :
                                                    <span className="pl-2 black-color f-700 f-poppins">
                                                        {location}
                                                    </span>
                                                </li>
                                            )}

                                            <li>
                                                Client :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    {client || "—"}
                                                </span>
                                            </li>

                                            <li>
                                                Duration :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    {duration || "—"}
                                                </span>
                                            </li>

                                            <li>
                                                Task :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    {normalizedTasks || "—"}
                                                </span>
                                            </li>

                                            <li>
                                                Budget :
                                                <span className="pl-2 black-color f-700 f-poppins">
                                                    {budget || "—"}
                                                </span>
                                            </li>
                                        </ul>

                                        {link && (
                                            <a
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn position-relative over-hidden text-white theme-bg theme-border2 text-uppercase mt-20 pt-2 pb-2"
                                            >
                                                View Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* TAGS + SOCIAL */}
                            <div className="pro-modal-footer mt-30 mb-45">
                                <div className="row align-items-center justify-content-md-between">
                                    {/* TAGS */}
                                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                        <div className="modal-tags d-sm-flex align-items-center pt-25">
                                            <h6 className="primary-font-family mb-0 pr-15 black-color f-700">
                                                Tags :
                                            </h6>
                                            <ul className="tag-list">
                                                {activeTags?.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="d-inline-block pr-10 f-700"
                                                    >
                                                        {/* Normal anchor; your previous Link from react-scroll wasn't actually needed here */}
                                                        <a
                                                            className="secondary-color3 d-block"
                                                            href={item.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* SOCIAL */}
                                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-10 col-12">
                                        <div className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                            <h6 className="primary-font-family pr-15 f-700 mb-0 black-color">
                                                Share this project :
                                            </h6>
                                            <ul className="social-link text-md-right">
                                                {activeSocial?.map((item, i) => (
                                                    <li key={i} className="d-inline-block">
                                                        <a
                                                            className={`${item.color} text-center pl-15 d-inline-block transition-3`}
                                                            href={item.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <i className={item.icon} />
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /footer */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
