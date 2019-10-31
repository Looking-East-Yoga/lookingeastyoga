import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

const StyledAside = styled.aside`
    flex: 1;
    margin:2rem 0 0;
    padding:0 2rem;
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        width:40%;
        padding:0 2% 0 2rem;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
`;
class Aside extends React.Component {
    render () {
		const{data} = this.props;
		console.log(data);
        return (
          <StyledAside role="complementary">
              {this.props.children}
          </StyledAside>
        );
	}
}
export default Aside;