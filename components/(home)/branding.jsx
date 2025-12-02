"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { branding } from "@/data/site";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function Branding() {
    return (
        <div className="brand-area brand-height over-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                        <ul className="brand-active pt-90 pb-50">
                            <Swiper
                                spaceBetween={30}
                                loop={true}
                                modules={[Autoplay]}
                                autoplay={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                    },
                                    575: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {branding?.map((item, i) => (
                                    <SwiperSlide
                                        key={i}
                                        className="text-center"
                                    >
                                        <li className="d-inline-block position-relative p-3">
                                            <Link
                                                className="single-brand mb-40 d-block text-center"
                                                href="/"
                                            >
                                                <Image
                                                    height={42}
                                                    width={168}
                                                    className="img zoom-img"
                                                    src={item.logoUrl}
                                                    alt="brand logo 1"
                                                />
                                            </Link>
                                        </li>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </ul>
                    </div>
                </div>
                <div className="theme-border-bottom" />
            </div>
        </div>
    );
}
