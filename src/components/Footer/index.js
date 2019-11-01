import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	position: relative;
	margin:2rem 0 0;
	padding:2rem 3rem 1rem;
	font-size:1rem;
	overflow: hidden;
	border-top: 2px solid ${props => props.theme.colors.grey30};
	background: ${props => props.theme.colors.grey10};
	h2{
		font-size:2rem;
		line-height: 2.75rem;
		font-style: italic;
		font-weight:300;
		text-align: center;
	}
`;
const dateYear = moment().format('YYYY'); 
class Footer extends React.Component {
    render () {
        return (
          <StyledFooter role="contentinfo">
            <h2>
              “If you work on Yoga, Yoga will work on you.”
              <br />
              <small>Baba Hari Dass</small>
            </h2>
				    <p>&copy; {dateYear} Looking East LLC.</p>
          </StyledFooter>
        );
    }
};

export default Footer