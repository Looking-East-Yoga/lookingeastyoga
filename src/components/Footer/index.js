import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: ${props => props.theme.footer.color};
  background: ${props => props.theme.footer.background};
  padding: 20px 20px 10px;
  font-size: 14px;
  text-align: center;
`;
const dateYear = moment().format('YYYY'); 
class Footer extends React.Component {
    render () {
        return (
          <StyledFooter role="contentinfo">
              &copy; {dateYear}
          </StyledFooter>
        );
    }
};

export default Footer