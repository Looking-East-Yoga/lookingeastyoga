import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: #aaa;
  background: ${props => props.theme.header.background};
  padding: 20px 20px 10px;
  font-size: 14px;
  text-align: center;
`;

class Header extends React.Component {
    render () {
        return (
          <StyledHeader role="banner">
              {this.props.children}
          </StyledHeader>
        );
    }
};

export default Header