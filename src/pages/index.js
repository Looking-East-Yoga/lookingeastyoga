import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Aside from '../components/Aside';
import Events from '../components/Events';

const headerOverrides = `
  span img{
    opacity: 0.3;
    filter:none;
  }
`;

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulPages(slug: {eq: "index"}) {
          title,
          subtitle,
          body {
            body
          }
        }
      }
    `}
    render={({
      contentfulPages: {
        title,
        subtitle,
        body:{body}
      }
    }) => (
      <Layout headerProps={{
          styles:headerOverrides,
          background:"/assets/images/background-homepage.jpg"
      }}>
        <Main>
          <Hero>
            <h1>
              {title}
              <small>{subtitle}</small>
            </h1>
          </Hero>
          <p>{body}</p>
          <Gallery/>
        </Main>
        <Aside showContact={true}>
          <Events/>
        </Aside>
        
      </Layout>
    )}
  />
);

export default HomePage;
