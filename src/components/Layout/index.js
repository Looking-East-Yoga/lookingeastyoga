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
  grid-template-columns: auto 40%;
  align-items:stretch;
  h1,h2,h3,h4,h5,p,li{
    color: ${props => props.theme.colors.grey80};
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
    grid-template-columns: auto 320px;
  }
`;

class Layout extends React.Component {
  
  render(){
    const {headerTitle, headerBackground} = this.props;
    return (
      <ThemeProvider theme={lightSimple}>
        <>
          <GlobalStyles />
          <StyledContainer>
            <Header headerTitle={headerTitle} backgroundUrl={headerBackground} />
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
