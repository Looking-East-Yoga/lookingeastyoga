import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledAside = styled.aside`
    flex: 1;
    margin:2rem 0 0;
    padding:0 2rem;
    >h2{
        font-size: ${({ theme }) => theme.fontSizes.size3};
    }
    >p,>li{
        font-size: ${({ theme }) => theme.fontSizes.size1};
    }
    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
    .social-link{
        transition:all 200ms;
        &:hover{
            opacity:0.7;
        }
    }
`;
class Aside extends React.Component {
    render () {
		const{data,children,showContact} = this.props;
		console.log(data);
        return (
          <StyledAside role="complementary">
            {showContact == true &&
                <>
                <h2>Contact</h2>
                <Button href="mailto:stacey@lookingeastyoga.com">
                    stacey@lookingeastyoga.com
                </Button>
                <p>
                    <a href="https://www.facebook.com/lookingeastyoga/" class="social-link" target="_blank"><img src="/assets/graphics/facebook.png" height="48" alt="Find Looking East Yoga on Facebook"/></a>&nbsp;
                    <a href="https://www.instagram.com/lookingeastyoga/" class="social-link" target="_blank"><img src="/assets/graphics/instagram.png" height="48" alt="Find Looking East Yoga on Instagram"/></a>
                </p>
                </>
            }
            {children}
          </StyledAside>
        );
	}
}
export default Aside;