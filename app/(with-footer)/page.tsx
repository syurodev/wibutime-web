import Container from '@/components/layout/Container';
import { getTopNovels } from '@/actions/novels/top';
import { TOP_TYPE } from '@/common/constants/top-type.enum';

import Hero from '@/components/layout/home/Hero';
import { NovelSummary } from '@/common/interfaces/novels/novel-summary';
import { getListNovels } from '@/actions/novels/get-list';
import { SORT } from '@/common/constants/sort.enum';
import { CONTENT_TYPE } from '@/common/constants/content-type.enum';
import CardContent from '@/components/ui/cards/CardContent';

export default async function Home() {
  const [topNovel, listNovel] = await Promise.all([
    getTopNovels({ type: TOP_TYPE.ALL_TIME, limit: 3 }),
    getListNovels({ query: { sort: SORT.OLDEST, page: 1, limit: 20 } }),
  ]);

  return (
    <Container className="max-w-[1500px]" withPaddingTop>
      <Hero data={topNovel.data as NovelSummary[]} />
      <div className="h-full flex flex-col items-center justify-center">
        <Container withPadding={true}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full h-fit">
            {(listNovel.data as NovelSummary[]).map((item: NovelSummary) => (
              <CardContent
                data={item}
                key={item.id}
                contentType={CONTENT_TYPE.NOVEL}
              />
            ))}
          </div>
        </Container>
      </div>
    </Container>
  );
}
