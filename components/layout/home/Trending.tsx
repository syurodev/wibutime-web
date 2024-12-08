import React from "react";
import Image from "next/image";
import { Eye, Rss } from "lucide-react";
import { NumberFormatter } from "@syurodev/ts-common";
import Container from "../Container";
import { TrendingAnimeChar } from "@/components/svg/trending.svg";

const data = [
  {
    id: "vfdvvwvwev1",
    image: "/images/test1.jpg",
    title: "Mushoku Tensei - Isekai Ittara Honki Dasu",
    url: "/lightnovels",
    views: 123231231123,
    follows: 123231231123,
    score: 5.8,
    updated_at: "2024-11-30 09:49:40.361655",
    content: {
      id: "kvfvdfvdf1",
      index: "V1 - C2",
    },
  },
  {
    id: "vfdvvwvwev2",
    image: "/images/test3.jpg",
    title: "Kumo Desu Ga Nani Ka",
    url: "/lightnovels",
    views: 123231231123,
    follows: 123231231123,
    score: 5.8,
    updated_at: "2024-11-30 09:49:40.361655",
    content: {
      id: "kvfvdfvdf1",
      index: "V1 - C2",
    },
  },
  {
    id: "vfdvvwvwev3",
    image: "/images/test5.jpeg",
    title: "デスマーチからはじまる異世界狂想曲",
    url: "/lightnovels",
    views: 123231231123,
    follows: 123231231123,
    score: 5.8,
    updated_at: "2024-11-30 09:49:40.361655",
    content: {
      id: "kvfvdfvdf1",
      index: "V1 - C2",
    },
  },
];

const Trending = () => {
  return (
    <Container className="py-10 p-4 flex flex-col items-center justify-center">
      <div className="relative w-full min-h-dvh h-fit lg:max-h-dvh flex items-center justify-center flex-col lg:flex-row gap-4 overflow-hidden">
        {/* Phần Tiêu Đề */}
        <div className="w-full lg:max-w-[500px] xl:max-w-[1200px] text-center mb-6 flex flex-col items-center">
          {/* Tên Trang Web */}
          {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pretty uppercase tracking-wider mb-2">
            WibuTime
          </h2> */}
          {/* Tiêu Đề Chính */}
          <h1 className="font-time italic font-semibold text-pretty text-[40px] md:text-[55px] lg:text-[5rem] xl:text-[5rem] leading-tight">
            The Ultimate Highlights of Anime, Manga, and Light Novels This Week
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mt-4">
            Dive into this week’s most exciting moments, featuring trending
            stories, breathtaking art, and captivating narratives that have
            captured the hearts of fans worldwide.
          </p>
          <TrendingAnimeChar className="mt-3 hidden lg:block" />
        </div>

        {/* Phần Danh Sách */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col gap-2 flex-col-reverse ${
                index % 2 === 0 && "md:flex-col"
              }`}
            >
              {/* Tên và Thông Số */}
              <div>
                <p className="line-clamp-1 font-semibold text-xs md:text-base text-center">
                  {item.title}
                </p>
                <div className="items-center gap-4 mx-auto w-fit hidden md:flex">
                  <div className="inline-flex items-center gap-1 font-medium w-fit">
                    <Eye className="size-3" />
                    <span className="text-xs md:text-sm">
                      {NumberFormatter.shorten(item.views, "en-EN")}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 font-medium w-fit">
                    <Rss className="size-3" />
                    <span className="text-xs md:text-sm">
                      {NumberFormatter.shorten(item.follows, "en-EN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hình Ảnh */}
              <div
                className={`w-full max-w-[500px] mx-auto relative rounded-xl aspect-[2/3] md:aspect-[2/4] overflow-hidden shadow-sm border-1 ${
                  index % 2 === 0
                    ? "md:rounded-t-full-b-lg"
                    : "md:rounded-t-lg-b-full"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Trending;
