import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  padding: 0 24px;
  color: ${props => props.theme.main.color};
  border-bottom:1px solid ${props => props.theme.colors.grey60};
  background: ${props => props.theme.colors.grey30};
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