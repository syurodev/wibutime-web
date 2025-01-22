'use server';

import { BackendUtils } from '@/common/utils/backend.util';
import { PROJECTID } from '@/common/constants/projectid.enum';
import { NovelDetail } from '@/common/interfaces/novels/novel-detail';

export const getNovelDetail = async ({
  query,
}: {
  query: {
    id: number;
  };
}) => {
  return BackendUtils.get<NovelDetail>(
    `novels/${query?.id}/detail`,
    PROJECTID.NOVEL,
  );
};
