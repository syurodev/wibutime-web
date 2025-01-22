'use server';

import { BackendUtils } from '@/common/utils/backend.util';
import { PROJECTID } from '@/common/constants/projectid.enum';
import { NovelSummary } from '@/common/interfaces/novels/novel-summary';

export const getTopNovels = async ({
  type,
  limit,
}: {
  type: number;
  limit: number;
}) => {
  return BackendUtils.get<NovelSummary[]>(
    `novels/top?type=${type}&limit=${limit}`,
    PROJECTID.NOVEL,
  );
};
