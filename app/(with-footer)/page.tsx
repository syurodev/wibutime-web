'use client';

import Image from 'next/image';
import { Link } from 'next-transition-router';
import { Crown, Eye, Heart } from 'lucide-react';
import { NumberFormatter } from '@syurodev/ts-common';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Container from '@/components/layout/Container';
import CardContent from '@/components/ui/cards/CardContent';
import { MotionDiv, MotionP } from '@/components/ui/motions/motion';
import { ShinyRotatingBorderButton } from '@/components/ui/buttons/ShinyRotatingBorderButton';
import ContentRenderer, { ContentNode } from '@/components/ui/ContentRenderer';
import { CONTENT_TYPE } from '@/common/constants/content-type.enum';

const fakeLightnovelData = [
  {
    id: 'vfdvvwvwev1',
    image: '/images/test1.jpg',
    title: 'Mushoku Tensei - Isekai Ittara Honki Dasu',
    url: '/lightnovels',
    views: 123231231123,
    score: 5.8,
    updated_at: '2024-11-30 09:49:40.361655',
    content: {
      id: 'kvfvdfvdf1',
      index: 'V1 - C2',
    },
  },
  {
    id: 'vfdvvwvwev2',
    image: '/images/test3.jpg',
    title: 'Kumo Desu Ga Nani Ka',
    url: '/lightnovels',
    views: 123231231123,
    score: 2.8,
    updated_at: '2024-11-30 09:49:40.361655',
    content: {
      id: 'kvfvdfvdf2',
      index: 'V1 - C1',
    },
  },
  {
    id: 'vfdvvwvwev3',
    image: '/images/test6.jpg',
    title:
      'Maou Gakuin no Futekigousha ~Shijou Saikyou no Maou no Shiso, Tensei shite Shison tachi no Gakkou e Kayou~',
    url: '/lightnovels',
    views: 123231231123,
    score: 5.8,
    updated_at: '2024-11-30 09:49:40.361655',
    content: {
      id: 'kvfvdfvdf3',
      index: 'V1 - C3',
    },
  },
  {
    id: 'vfdvvwvwev4',
    image: '/images/test2.jpeg',
    title: 'デスマーチからはじまる異世界狂想曲',
    updated_at: '2024-11-26 07:44:25.374751',
    url: '/lightnovels',
    views: 123992,
    score: 7.8,
    content: {
      id: 'kvfvdfvdf4',
      index: 'V2 - C2',
    },
  },
  {
    id: 'vfdvvwvwev5',
    image: '/images/test4.jpeg',
    title: 'Overlord',
    updated_at: '2024-11-26 07:44:25.374751',
    url: '/lightnovels',
    views: 123231231123,
    score: 5.8,
    content: {
      id: 'kvfvdfvdf5',
      index: 'V6 - C2',
    },
  },
  {
    id: 'vfdvvwvwev6',
    image: '/images/test5.jpeg',
    title:
      'Ankoku kishi monogatari~Yuusha wo taosu tameni Maou ni Shoukansaremashita~',
    updated_at: '2024-11-26 07:44:25.374751',
    url: '/lightnovels',
    views: 123231231123,
    score: 9.8,
    content: {
      id: 'kvfvdfvdf6',
      index: 'V1 - C10.5',
    },
  },
]; // 20 phần tử

const fakeTrending = [
  {
    id: '1',
    image: '/images/test1.jpg',
    title:
      'Không có bất cứ tổ chức bí mật tà ác quái dị nào cả(thiệt luôn!?) nên tôi đành phải tự mình lập ra một cái!',
    url: '/lightnovels',
    views: 123231231123,
    score: 5.8,
    type: 1,
    updated_at: '2024-11-30 09:49:40.361655',
    content: {
      id: 'kvfvdfvdf1',
      index: 'V1 - C2',
    },
    summary: [
      {
        id: '1',
        type: 'p',
        children: [
          {
            text: 'Nhân vật chính đột dưng thức tỉnh siêu năng lực vào một ngày đẹp trời nào đó, bất ngờ chưa!',
          },
        ],
      },
      {
        id: '2',
        type: 'p',
        children: [{ text: 'Nhưng chả có cái tổ chức nào nhắm vào anh cả!' }],
      },
      {
        id: '3',
        type: 'p',
        children: [
          {
            text: 'Cô nàng hoa khôi của khối có siêu năng lực giống như anh… hoàn toàn không có!',
          },
        ],
      },
      {
        id: '4',
        type: 'p',
        children: [
          { text: 'Cũng chả có cái trò triệu-hồi-sang-thế-giới-khác luôn!' },
        ],
      },
      {
        id: '5',
        type: 'p',
        children: [
          {
            text: 'Quá khứ của nhân vật chính cũng chả có cái khỉ gì gọi là thần thần bí bí!',
          },
        ],
      },
      {
        id: '6',
        type: 'p',
        children: [
          {
            text: 'Không ma nào thèm giải thích lí do anh có được siêu năng lực, thiệt đó hả?!',
          },
        ],
      },
      {
        id: '7',
        type: 'p',
        children: [{ text: 'Bình thường! Mọi thứ quá sức bình thường!' }],
      },
      {
        id: '8',
        type: 'p',
        children: [
          {
            text: 'Anh ấy tốt nghiệp và cứ thế có việc làm, chả-có-cái-quái-gì-xảy-ra-hết!',
          },
        ],
      },
      {
        id: '9',
        type: 'p',
        children: [
          { text: 'Anh cứ thế sống như một công viên chức tầm thường!' },
        ],
      },
      {
        id: '10',
        type: 'p',
        children: [
          {
            text: 'Dư sức cân cả thế giới nhưng chả có cái gì xảy ra hết trơn, giỡn mặt hả?!',
          },
        ],
      },
      {
        id: '11',
        type: 'p',
        children: [{ text: 'Thôi đủ rồi, ổn thôi, ổn cả mà!' }],
      },
      {
        id: '12',
        type: 'p',
        children: [
          {
            text: 'Nếu mọi thứ bắt buộc phải như thế này thì bản thân tôi sẽ tự túc! Phải! Tôi sẽ tự thân lập ra tổ chức siêu nhiên thần thần bí bí luôn!',
          },
        ],
      },
      {
        id: '13',
        type: 'p',
        children: [
          {
            text: 'Nào, hãy xem đây, những trang sử phi thường do tự thân tôi viết nên! Tèn ten ten!',
          },
        ],
      },
      {
        id: '14',
        type: 'p',
        children: [
          {
            text: 'Dư sức cân cả thế giới nhưng chả có cái gì xảy ra hết trơn, giỡn mặt hả?!',
          },
        ],
      },
      {
        id: '15',
        type: 'p',
        children: [{ text: 'Thôi đủ rồi, ổn thôi, ổn cả mà!' }],
      },
      {
        id: '16',
        type: 'p',
        children: [
          {
            text: 'Nếu mọi thứ bắt buộc phải như thế này thì bản thân tôi sẽ tự túc! Phải! Tôi sẽ tự thân lập ra tổ chức siêu nhiên thần thần bí bí luôn!',
          },
        ],
      },
      {
        id: '17',
        type: 'p',
        children: [
          {
            text: 'Nào, hãy xem đây, những trang sử phi thường do tự thân tôi viết nên! Tèn ten ten!',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    image: '/images/test3.jpg',
    title:
      'Maou Gakuin no Futekigousha ~Shijou Saikyou no Maou no Shiso, Tensei shite Shison tachi no Gakkou e Kayou~',
    url: '/lightnovels',
    type: 2,
    views: 123231231123,
    score: 2.8,
    updated_at: '2024-11-30 09:49:40.361655',
    content: {
      id: 'kvfvdfvdf2',
      index: 'V1 - C1',
    },
    summary: [
      {
        id: '1',
        type: 'p',
        children: [
          {
            text: 'Sau một thời gian dài đối địch với con người, tinh linh và cả những vị thần, trải qua vô vàn trận chiến và xung đột, Quỷ vương Arnos đã trở nên chán ngấy và mệt mỏi với tất cả những điều đó, và bắt đầu mong mỏi một thế giới hòa bình. Vì vậy, gã quỷ vương ấy đã quyết định hi sinh thân mình để xây dựng bức tường phân chia thế giới, chấm dứt cuộc chiến tranh, và chuyển sinh đến 2000 năm sau.',
          },
        ],
      },
      {
        id: '2',
        type: 'p',
        children: [
          {
            text: 'Tuy nhiên, những gì chờ đợi cậu ta sau khi tái sinh là một thế giới vì quá quen với sự bình an mà con cháu của cậu trở nên quá yếu ớt , ma thuật sụt giảm nghiêm trọng, và những đại ma pháp thì hầu như biến mất.',
          },
        ],
      },
      {
        id: '3',
        type: 'p',
        children: [
          {
            text: 'Arnos theo học tại Học viện Quỷ vương - nơi được thành lập để tìm bất kỳ học viên nào có thể là tái sinh của quỷ vương, nhưng khả năng của cậu ta quá phi thường đến mức những người trong học viện không thể đánh giá đúng khả năng của cậu ta, vì vậy Arnos bị mọi người gắn cho cái mác là “Kẻ không phù hợp”. Bị đánh giá thấp và xa lánh bởi hầu hết mọi người ở đó, nhưng rồi cậu cũng đã gặp được một cô gái có thái độ thân thiện với mình, Misha, là thuộc hạ, cũng như đồng chí đầu tiên của cậu trong thời đại này. Cả hai cùng chung một mục tiêu, phấn đấu leo lên đỉnh của hệ thống phân cấp quỷ để một ngày không xa đòi lại danh hiệu và địa vị đã từng là của cậu.',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    image: '/images/test6.jpg',
    type: 3,
    title: 'RE:Yandere',
    url: '/lightnovels',
    views: 123231231123,
    score: 5.8,
    updated_at: '2024-11-30 09:49:40.361655',
    content: {
      id: 'kvfvdfvdf3',
      index: 'V1 - C3',
    },
    summary: [
      {
        id: '1',
        type: 'p',
        children: [
          {
            text: "Lâm Trạch phát hiện mình có năng lực 'Quay ngược cái chết'! Nhưng điều này có phải là may mắn hay không thì không biết được. Nếu cái chết là hồi kết của sự sợ hãi, vậy khi không thể lựa chọn cái chết thì nỗi sợ càng kinh khủng hơn!",
          },
        ],
      },
    ],
  },
];

export default function Home() {
  const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTrendingIndex(
  //       (prevIndex) => (prevIndex + 1) % fakeTrending.length,
  //     );
  //   }, 15000);

  //   return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  // }, []);

  return (
    <Container className="max-w-[1500px]" withPaddingTop>
      <div className="relative w-full h-[calc(100dvh-50px)] overflow-hidden">
        <AnimatePresence mode="sync">
          {fakeTrending.map((x, index) => {
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
                          {x.content.index}
                        </ShinyRotatingBorderButton>
                      </MotionDiv>
                    </Link>

                    <MotionDiv
                      delay={0.35}
                      className="hidden lg:block h-full overflow-hidden"
                    >
                      <ContentRenderer
                        content={x.summary as ContentNode[]}
                        textClassName="font-time"
                        boxClassName="overflow-y-scroll h-full"
                      />
                    </MotionDiv>

                    {/* slide button */}
                    <MotionDiv
                      reverse={true}
                      delay={0.7}
                      className="flex w-fit gap-4 absolute bottom-2 lg:bottom-0 left-1/2 !-translate-x-1/2"
                    >
                      {fakeTrending.map((x, index) => {
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
                              src={x.image}
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
                        'w-full h-full lg:aspect-[2/3] relative flex-auto rounded-2xl overflow-hidden'
                      }
                    >
                      <Image
                        src={x.image}
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

      <div className="h-full flex flex-col items-center justify-center">
        <Container withPadding={true}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full h-fit">
            {fakeLightnovelData.map((item, index) => (
              <CardContent
                data={item}
                key={index}
                contentType={CONTENT_TYPE.ANIME}
              />
            ))}
          </div>
        </Container>
      </div>
    </Container>
  );
}
