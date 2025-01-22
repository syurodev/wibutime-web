import React, { FC } from 'react';
import { Link } from 'next-transition-router';

import Container from '@/components/layout/Container';
import { getNovelDetail } from '@/actions/novels/novel-detail';
import { notFound } from 'next/navigation';

type IProps = {
  params: { id: string };
};

const LightnovelPage: FC<IProps> = async ({ params }: IProps) => {
  if (!Number(params.id)) {
    return notFound();
  }

  const response = await getNovelDetail({ query: { id: Number(params.id) } });
  console.log(response);
  return (
    <Container withPaddingTop>
      LightnovelPage
      <Link href={'/'}>Home</Link>
    </Container>
  );
};

export default LightnovelPage;
