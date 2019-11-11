import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Markdown from '../components/Markdown';
import Aside from '../components/Aside';

const StyledPage = styled.div`

`;
const headerOverrides = `
  display: flex;
  align-items: center;
  justify-content: center;
    padding:0 !important;
    >.title{
      margin:0  !important;
      padding:0  !important;
    }
  span img{
    opacity: 0.3;
    filter:none;
  }
`;

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
      <StyledPage>
        <Layout 
          headerProps={{
            title:subtitle,
            styles:headerOverrides,
            logo:false,
            background:"/assets/images/background-01.jpg"
          }}
          footerProps={{
            logo:"/assets/graphics/lookingeastyoga-logo-withtag.png"
          }}
        >
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
      </StyledPage>
    )}
  />
);

export default HomePage;
