import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
	margin:0;
	padding:1rem 0 2rem;
	text-align: center;
	overflow: hidden;
  border-bottom: 3px solid rgba(253,173,53,1.0);
  >img{
    position: relative;
    z-index:1;
    width: 100%;
    max-width:200px;
    vertical-align: middle;
  }
  span{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:0;
  }
  span img{
    height: 100%;
    width: 600px;
    opacity: 0.45;
    filter: grayscale(90%);
  }
  @media (min-width:600px){
    padding:2rem 0 2rem;
    span img{
      height: auto;
      width: 100%;
      transform: translate(0,-25%);
    }
    
  }
  @media (min-width:${props => props.theme.breakpoints.md}){
    >img{
      max-width:320px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}){
      height:60vh;
  }
  
`;

class Header extends React.Component {
    render () {
        return (
          <StyledHeader role="banner">
              <img src="/assets/images/LookingEast_Vert_Solid_NoTag.png"/>
              <span>
                <img src={this.props.backgroundUrl}/>
              </span>
              {this.props.children}
          </StyledHeader>
        );
    }
};

export default Header