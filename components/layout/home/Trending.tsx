"use client"

import React from "react";
import Image from "next/image";
import { Eye, Rss } from "lucide-react";
import { NumberFormatter } from "@syurodev/ts-common";
import { motion } from "framer-motion";

import Container from "../Container";

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
        <Container className="py-10 flex flex-col items-center justify-center">

                <div className="relative w-full h-[400px] flex justify-center items-center">
                    {data.map((item, index) => {
                        const isCenter = index === Math.floor(data.length / 2); // Ảnh trung tâm
                        const isLeft = index < Math.floor(data.length / 2); // Ảnh bên trái

                        // Variants cho từng ảnh
                        const variants = {
                            hidden: {
                                opacity: 0,
                                y: 100, // Tất cả bắt đầu từ phía dưới
                                scale: 0.8,
                            },
                            visible: {
                                opacity: 1,
                                y: 0, // Di chuyển lên vị trí ban đầu
                                scale: isCenter ? 1.1 : 0.9,
                                x: isCenter ? 0 : isLeft ? "-70%" : "70%", // Tách ra vị trí bên trái/phải
                                rotate: isCenter ? 0 : isLeft ? -10 : 10, // Xoay khi tách
                                transition: {
                                    duration: 0.8,
                                    ease: [0.76, 0, 0.24, 1],
                                    delay: 0.2,
                                    delayChildren: 0.2,
                                    staggerChildren: 0.1,
                                },
                            },
                        };

                        return (
                            <motion.div
                                key={item.id}
                                className={`absolute min-w-[200px] w-full max-w-[32%] md:max-w-[30%] ${isCenter ? "z-10" : "z-0"}`}
                                variants={variants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{
                                    y: -20, // Di chuyển lên trên khi hover
                                    x: isCenter ? 0 : isLeft ? "-90%" : "90%",
                                    rotate: 0, // Xoay về 0°
                                    scale: isCenter ? 1.3 : 1.2, // Tăng kích thước
                                    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], }, // Hiệu ứng nhanh hơn khi hover
                                }}
                            >
                                {/* Hình Ảnh */}
                                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-md">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Tên và Thông Số */}
                                <div className="text-center mt-2 hidden">
                                    <p className="line-clamp-1 font-semibold text-sm">{item.title}</p>
                                    <div className="flex justify-center gap-2 text-xs">
                                        <div className="inline-flex items-center gap-1">
                                            <Eye className="size-3" />
                                            <span>{NumberFormatter.shorten(item.views, "en-EN")}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-1">
                                            <Rss className="size-3" />
                                            <span>{NumberFormatter.shorten(item.follows, "en-EN")}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

        </Container>
    );
};

export default Trending;
