import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
    flex: 1;
    padding: 0 2rem;
    color: ${props => props.theme.main.color};
    background: ${props => props.theme.main.background};
    h1{
        font-size: ${({ theme }) => theme.fontSizes.size5};
    }
    h2{
        font-size: ${({ theme }) => theme.fontSizes.size3};
    }
    p{
        color: ${({ theme }) => theme.card.color};
        font-size: ${({ theme }) => theme.fontSizes.size1};
    }
`;
class Main extends React.Component {
    render () {
        return (
          <StyledMain role="main">
              {this.props.children}
          </StyledMain>
        );
    }
};

export default Main