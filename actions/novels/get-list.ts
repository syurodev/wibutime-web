'use server';

import { BackendUtils } from '@/common/utils/backend.util';
import { PROJECTID } from '@/common/constants/projectid.enum';
import { NovelSummary } from '@/common/interfaces/novels/novel-summary';
import { SORT } from '@/common/constants/sort.enum';

export const getListNovels = async ({
  query,
}: {
  query: {
    user_id?: number;
    author_id?: number;
    artist_id?: number;
    status?: number;
    type?: number;
    sort?: number;
    key_search?: string;
    page?: number;
    limit?: number;
  };
}) => {
  return BackendUtils.get<NovelSummary[]>(
    `novels?user_id=${query?.user_id ?? -1}&author_id=${query?.author_id ?? -1}&artist_id=${query?.artist_id ?? -1}&status=${query?.status ?? -1}&type=${query?.type ?? -1}&sort=${query?.sort ?? SORT.NEW_CHAPTER}&key_search=${query?.key_search ?? ''}&page=${query?.page ?? 1}&limit=${query?.limit ?? 20}`,
    PROJECTID.NOVEL,
  );
};
