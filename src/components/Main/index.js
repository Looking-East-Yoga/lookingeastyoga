import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
    flex: 1;
    margin:2rem 0;
    padding: 0 2rem;
    color: ${props => props.theme.main.color};
    background: ${props => props.theme.main.background};
    h2,h3{
        margin:2rem 0 0;
        padding:2rem 0 0;
        border-top:1px solid ${props => props.theme.colors.grey20}
    }
    >h3{
        font-size: ${({ theme }) => theme.fontSizes.size2};
    }
    >p{
        color: ${({ theme }) => theme.card.color};
        font-size: ${({ theme }) => theme.fontSizes.size2};
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