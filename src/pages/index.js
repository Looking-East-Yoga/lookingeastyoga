import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Aside from '../components/Aside';

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
      <Layout>
        <Main>
          <Hero>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </Hero>
          <p>{body}</p>
        </Main>
        <Aside>
          Hello I'm index
        </Aside>
        
      </Layout>
    )}
  />
);

export default HomePage;
