import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Markdown from '../components/Markdown';
import Aside from '../components/Aside';

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query GirlScoutsEventsPage {
        contentfulPages(slug: {eq: "girls-scouts-events"}) {
          title,
          subtitle,
          body {
            body
          },
          secondary{
            secondary
          }
        }
      }
    `}
    render={({
      contentfulPages: {
        title,
        subtitle,
        body:{body},
        secondary:{secondary}
      }
    }) => (
      <Layout headerTitle={subtitle} headerBackground="/assets/images/background-02.jpg">
        <Main>
          <Hero>
            <h1>{title}</h1>
          </Hero>
          <Markdown value={body} />
        </Main>
        <Aside>
          <Markdown value={secondary} />
        </Aside>
        
      </Layout>
    )}
  />
);

export default HomePage;
