import React from 'react';
import Image from 'next/image';
import { cn } from '@/common/utils/cn';

// Định nghĩa kiểu dữ liệu cho cấu trúc nội dung
export type ContentNode = {
  id: string;
  type: 'p' | 'img';
  url?: string;
  children: {
    text: string;
  }[];
};

type ContentRendererProps = {
  content: ContentNode[];
  boxClassName?: string;
  textClassName?: string;
  imageClassName?: string;
};

const ContentRenderer: React.FC<ContentRendererProps> = ({
  content,
  boxClassName,
  textClassName,
  imageClassName,
}) => {
  return (
    <div
      className={cn(
        'leading-relaxed flex flex-col gap-2 relative text-pretty w-fit mx-auto max-w-5xl p-4 rounded-xl',
        boxClassName,
      )}
    >
      {content.map((node) => {
        // Xử lý các phần tử đoạn văn
        if (node.type === 'p') {
          return (
            <p key={node.id} className={cn('leading-relaxed', textClassName)}>
              {node.children.map((child, index) => (
                <React.Fragment key={index}>{child.text}</React.Fragment>
              ))}
            </p>
          );
        }

        // Xử lý các phần tử hình ảnh
        if (node.type === 'img' && node.url) {
          return (
            <div key={node.id} className="my-4">
              <Image
                src={node.url}
                alt={node.children[0]?.text || ''}
                className={cn(
                  'w-full max-w-md mx-auto rounded-lg object-cover',
                  imageClassName,
                )}
              />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default ContentRenderer;
