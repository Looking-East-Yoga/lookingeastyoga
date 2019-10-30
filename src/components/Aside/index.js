import React from 'react';
import styled from 'styled-components';

const StyledAside = styled.aside`
    flex: 1;
    padding: 24px;
    color: ${props => props.theme.aside.color};
    background: ${props => props.theme.aside.background};
`;
class Aside extends React.Component {
    render () {
        return (
          <StyledAside role="complementary">
              Sidebar
              {this.props.children}
          </StyledAside>
        );
    }
};

export default Aside