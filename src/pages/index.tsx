import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/sections/layout';
import Image from '../components/sections/image';
import SEO from '../components/sections/seo';
import Icon from '~core/Icon/Icon';
import Button from '~core/Button/Button';
import BackgroundSVG from '~core/BackgroundSVG/BackgroundSVG';
import BgSVGStyles from '~core/BackgroundSVG/background-svg.module.scss';

console.log(BgSVGStyles);

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Button suffixIcon="arrow-thin-right">Testing Button</Button>
    <BackgroundSVG className={BgSVGStyles.bgIconExample} />
    <Link to="/page-2/">
      Go to page 2 <Icon icon="arrow-thin-right" />
    </Link>
  </Layout>
);

export default IndexPage;
