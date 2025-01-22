'use client';

import React, { FC, useEffect, useState } from 'react';
import { NumberFormatter } from '@syurodev/ts-common';
import { AnimatePresence } from 'framer-motion';
import { Crown, Eye, Heart } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import { CONTENT_TYPE } from '@/common/constants/content-type.enum';
import { NovelSummary } from '@/common/interfaces/novels/novel-summary';
import { ShinyRotatingBorderButton } from '@/components/ui/buttons/ShinyRotatingBorderButton';
import { MotionDiv, MotionP } from '@/components/ui/motions/motion';

type Props = {
  data: NovelSummary[];
};

const Hero: FC<Props> = ({ data }: Props) => {
  const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrendingIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="relative w-full h-[calc(100dvh-50px)] overflow-hidden">
      <AnimatePresence mode="sync">
        {data.map((x, index) => {
          let contentType;
          if (x.type === CONTENT_TYPE.ANIME) {
            contentType = 'anime';
          } else if (x.type === CONTENT_TYPE.MANGA) {
            contentType = 'manga';
          } else {
            contentType = 'lightnovel';
          }

          let contentTypeClass;
          if (x.type === CONTENT_TYPE.ANIME) {
            contentTypeClass = 'text-anime-color';
          } else if (x.type === CONTENT_TYPE.MANGA) {
            contentTypeClass = 'text-manga-color';
          } else {
            contentTypeClass = 'text-novel-color';
          }

          return (
            index === currentTrendingIndex && (
              <MotionDiv
                key={'trending' + index}
                className="w-full h-full flex flex-col lg:flex-row overflow-hidden p-4 gap-4 pb-10"
              >
                <div className="flex-auto w-full lg:relative flex flex-col gap-4 lg:pb-7">
                  <div className="h-fit">
                    <MotionDiv
                      delay={0.15}
                      className="text-xs uppercase font-medium text-center flex items-center justify-center gap-1"
                    >
                      <span className={contentTypeClass}>{contentType}</span>
                      <span>Spotlight</span>
                      <Crown className="size-3 text-yellow-500" />
                      <span>Weekly Top Pick</span>
                    </MotionDiv>
                    <MotionP
                      delay={0.2}
                      className="text-3xl md:text-7xl font-medium text-center line-clamp-3 font-time italic"
                    >
                      {x.title}
                    </MotionP>
                  </div>

                  <MotionDiv
                    delay={0.25}
                    className="flex items-center gap-4 mx-auto w-fit"
                  >
                    <div className="flex items-center gap-1">
                      <Eye className="size-3 " />
                      <span className="text-xs font-semibold ">
                        {NumberFormatter.shorten(x.views, 'vi-VN')}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="size-3 " />
                      <span className="text-xs font-semibold">
                        {NumberFormatter.shorten(x.views, 'vi-VN')}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="size-3" />
                      <span className="text-xs font-semibold">
                        {NumberFormatter.shorten(x.views, 'vi-VN')}
                      </span>
                    </div>
                  </MotionDiv>

                  <Link href={'/lightnovels/12'} className="w-fit mx-auto">
                    <MotionDiv delay={0.3} className="w-fit mx-auto">
                      <ShinyRotatingBorderButton className="w-full min-w-[300px] line-clamp-1 font-medium">
                        {x.type === CONTENT_TYPE.ANIME
                          ? 'EP: ' + (x?.content?.index ?? 'unknown')
                          : 'CHAPTER: ' + (x?.content?.index ?? 'unknown')}
                      </ShinyRotatingBorderButton>
                    </MotionDiv>
                  </Link>

                  {/* <MotionDiv
                    delay={0.35}
                    className="hidden lg:block h-full overflow-hidden"
                  >
                    <ContentRenderer
                      content={x.summary as ContentNode[]}
                      textClassName="font-time"
                      boxClassName="overflow-y-scroll h-full"
                    />
                  </MotionDiv> */}

                  {/* slide button */}
                  <MotionDiv
                    reverse={true}
                    delay={0.7}
                    className="flex w-fit gap-4 absolute bottom-2 lg:bottom-0 left-1/2 !-translate-x-1/2"
                  >
                    {data.map((x, index) => {
                      return (
                        <button
                          className={`rounded-full size-6 relative overflow-hidden ${
                            index === currentTrendingIndex
                              ? 'border-2 border-primary'
                              : ''
                          }`}
                          onClick={() => setCurrentTrendingIndex(index)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setCurrentTrendingIndex(index);
                            }
                          }}
                          key={'trending-' + index}
                          role="tab"
                          aria-selected={index === currentTrendingIndex}
                          tabIndex={0}
                        >
                          <Image
                            src={x.cover_image_url}
                            alt={x.title}
                            fill
                            className={'object-cover'}
                          />
                        </button>
                      );
                    })}
                  </MotionDiv>
                </div>

                <MotionDiv delay={0.35} className="w-full lg:w-fit h-full">
                  <div
                    className={
                      'w-full min-w-[400px] h-full min-h-[400px] lg:aspect-[2/3] relative flex-auto rounded-2xl overflow-hidden'
                    }
                  >
                    <Image
                      src={x.cover_image_url}
                      alt={x.title}
                      fill
                      className={'object-cover'}
                    />
                  </div>
                </MotionDiv>
              </MotionDiv>
            )
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
