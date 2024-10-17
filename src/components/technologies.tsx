"use client";

import { Fragment } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { tools } from "@constants/tools";
import { Icon } from "@components/core/icon";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export default function Technologies() {
  return (
    <Fragment>
      <div className="cf-space-y-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          spaceBetween={16}
          slidesPerView="auto"
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
        >
          {tools.slice(0, 12).map((_, i) => {
            return (
              <SwiperSlide key={i} className="!cf-inline-flex !cf-w-auto">
                <div className="group cf-inline-flex cf-cursor-pointer cf-items-center cf-justify-center cf-space-x-3 cf-rounded-lg cf-border cf-border-dashed cf-px-6 cf-py-3 cf-font-family-roboto-mono hover:cf-text-zinc-400 dark:cf-border-zinc-800 dark:cf-bg-zinc-800/5 hover:dark:cf-border-zinc-800">
                  <Icon icon={_.icon} width={24} height={24} />
                  <span>{_.technology}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          spaceBetween={16}
          slidesPerView="auto"
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {tools.slice(12).map((_, i) => {
            return (
              <SwiperSlide key={i} className="!cf-inline-flex !cf-w-auto">
                <div className="group cf-inline-flex cf-cursor-pointer cf-items-center cf-justify-center cf-space-x-3 cf-rounded-lg cf-border cf-border-dashed cf-px-6 cf-py-3 cf-font-family-roboto-mono hover:cf-text-zinc-400 dark:cf-border-zinc-800 dark:cf-bg-zinc-800/5 hover:dark:cf-border-zinc-800">
                  <Icon icon={_.icon} width={24} height={24} />
                  <span>{_.technology}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Fragment>
  );
}
