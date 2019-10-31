import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  color: ${props => props.theme.main.color};
  >h1{
    margin:0;
    padding: 1.25rem 0 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.size4};
  }
  >h1>small{
    display: block;
    margin:0.25rem 0 0;
    padding:0;
    color:rgba(0,0,0,0.5);
    font-size: ${({ theme }) => theme.fontSizes.size3};
  }
`;

class Hero extends React.Component {
    render() {
        return (
          <StyledHero>
              {this.props.children}
          </StyledHero>
        );
    }
};

export default Hero