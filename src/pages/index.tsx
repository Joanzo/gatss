import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/sections/layout';
import Image from '../components/sections/image';
import SEO from '../components/sections/seo';
import Icon, { getIconsNames } from '~core/Icon/Icon';
import Button from '~core/Button/Button';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Button>Testing Button</Button>
    <Link to="/page-2/">
      Go to page 2 <Icon icon="arrow-thin-right" />
    </Link>
  </Layout>
);

export default IndexPage;
