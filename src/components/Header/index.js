import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
	margin:0;
	padding:1rem 0 2rem;
	text-align: center;
	overflow: hidden;
  border-bottom: 3px solid ${props => props.theme.colors.orange};
  >.title{
    position: relative;
    margin-top:3rem;
    font-size:3rem;
    color:${props => props.theme.colors.grey90};
    z-index:1;
    text-shadow:0 0 40px rgba(0,0,0,0.3);
    vertical-align: middle;
  }
  >img{
    position: relative;
    z-index:1;
    width: 100%;
    max-width:200px;
    vertical-align: middle;
  }
  >img.small{
    max-width:150px;
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
        const {headerTitle} = this.props;
        return (
          <StyledHeader role="banner">
              {headerTitle == undefined &&
                <img src="/assets/graphics/lookingeastyoga-logo.png"/>
              }
              {headerTitle !== undefined &&
                <img className="small" src="/assets/graphics/lookingeastyoga-logo.png"/>
              }
              {headerTitle !== undefined &&
                <div className="title">{headerTitle}</div>
              }
              <span>
                <img src={this.props.backgroundUrl}/>
              </span>
              {this.props.children}
          </StyledHeader>
        );
    }
};

export default Header