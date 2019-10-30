import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../themes/global';
import { lightSimple } from '../../themes/simple';
import Header from '../Header';
import Footer from '../Footer';

const StyledContainer = styled.div`
  background: ${props => props.theme.container.body};
`;
const StyledSection = styled.section`
  display:grid;
  grid-template-columns: auto 320px;
  // grid-column-gap: 16px;
  h1,h2,h3,h4,h5,p,li{
    color: ${props => props.theme.body.text};
  }
  @media (max-width: 640px) {
    display: block;
  }
`;

class Layout extends React.Component {
  render(){
    return (
      <ThemeProvider theme={lightSimple}>
        <>
          <GlobalStyles />
          <StyledContainer>
            <Header>
              HEADER
            </Header>
            <StyledSection>
              {this.props.children}
            </StyledSection>
            <Footer/>
          </StyledContainer>
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
