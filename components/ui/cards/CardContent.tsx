import React, { FC } from 'react';
import Image from 'next/image';
import { NumberFormatter, TimeUtil } from '@syurodev/ts-common';
import { ClockArrowUp, Eye } from 'lucide-react';

import { Badge } from '../shadcn/badge';
import CardMouseHighlightingBorder from './CardMouseHighlightingBorder';
import { CONTENT_TYPE } from '@/common/constants/content-type.enum';

type IProps = {
  contentType: CONTENT_TYPE;
  data: {
    id: string;
    image: string;
    title: string;
    url: string;
    views: number;
    score: number;
    updated_at: string;
    content: {
      id: string;
      index: string;
    };
  };
  showScore?: boolean;
};

const CardContent: FC<IProps> = ({ data, showScore = true, contentType }) => {
  const getBadgeClass = (
    score: number,
  ): 'low_score' | 'medium_score' | 'high_score' => {
    if (score < 3.5) {
      return 'low_score';
    } else if (score < 7.5) {
      return 'medium_score';
    } else {
      return 'high_score';
    }
  };

  return (
    <CardMouseHighlightingBorder contentType={contentType}>
      <div className="flex flex-col w-full h-full relative">
        <div className="w-full h-full relative max-w-[500px] max-h-[700px] overflow-hidden flex-[3] lg:flex-[6] rounded-[calc(1rem-4px)] shadow">
          {showScore && (
            <Badge
              className="absolute top-2 right-2 z-10 text-[10px]"
              variant={getBadgeClass(data.score)}
            >
              {data.score}
            </Badge>
          )}

          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(max-width: 700px)"
            priority
            className="object-cover"
          />
        </div>
        <div className="overflow-hidden relative pt-1 lg:pt-4 flex flex-col gap-1 h-fit">
          <span className="absolute w-[25%] h-[3px] bg-primary/50 rounded-full top-[10px] left-1/2 -translate-x-1/2 hidden lg:block" />
          <p className="line-clamp-1 font-semibold text-balance text-sm lg:text-base">
            {data.title}
          </p>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1 font-semibold">
              <ClockArrowUp className="size-3" />
              <span className="text-xs line-clamp-1">{data.content.index}</span>
            </div>
            <div className="inline-flex items-center gap-1 font-semibold w-fit">
              <Eye className="size-3" />
              <span className="text-xs">
                {NumberFormatter.shorten(data.views, 'en-EN')}
              </span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1 font-semibold">
            <ClockArrowUp className="size-3" />
            <span className="text-xs line-clamp-1">
              {TimeUtil.getRelativeTime(data.updated_at)}
            </span>
          </div>
        </div>
      </div>
    </CardMouseHighlightingBorder>
  );
};

export default CardContent;
