import React from 'react';
import { Link } from 'next-transition-router';

import Container from '@/components/layout/Container';

const LightnovelPage = () => {
  return (
    <Container withPaddingTop>
      LightnovelPage
      <Link href={'/'}>Home</Link>
    </Container>
  );
};

export default LightnovelPage;
