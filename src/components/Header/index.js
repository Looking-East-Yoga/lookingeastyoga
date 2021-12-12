import React from 'react';
import styled from 'styled-components';

const BaseStyles = styled.header`
  position: relative;
  height:60vw;
	margin:0;
	padding:1rem 0 2rem;
	text-align: center;
	overflow: hidden;
  border-bottom: 2px solid ${props => props.theme.colors.orange};
  >.title{
    position: relative;
    margin-top:1rem;
    padding:0 2rem;
    font-size:2rem;
    line-height:120%;
    color:${props => props.theme.colors.grey90};
    z-index:1;
    text-shadow:0 0 20px rgba(255,255,255,0.6);
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
    max-width:100px;
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
    height: auto;
    width: 100%;
    opacity: 0.3;
    filter: grayscale(90%);
  }
  @media (min-width:${props => props.theme.breakpoints.sm}){
    padding:2rem 0 2rem;
    height:35vw;
    >img{max-width:280px;}
    >img.small{max-width:120px;}
    >.title{
      margin-top:2rem;
      font-size:2.5rem;
    }
    span img{
      transform: translate(0,-15%);
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}){
    padding:3rem 0 2rem;
    height:30vw;
    >img{max-width:320px;}
    >img.small{max-width:160px;}
    >.title{
      margin-top:3rem;
      font-size:3rem;
    }
    span img{
      opacity: 0.45;
      transform: translate(0,-25%);
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}){
    height:30vw;
    >img.small{max-width:200px;}
    span img{
      transform: translate(0,-30%);
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}){
    padding-top:5rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.xx}){
    height:25vw;
    span img{
      transform: translate(0,-35%);
    }
  }
`;

class Header extends React.Component {
    render () {
        const {styles,title,background,logo} = this.props;
        const StyledHeader = styled(BaseStyles)`
          ${this.props.styles}
        `;
        return (
          <StyledHeader role="banner" styles={styles}>
              {title === undefined &&
                <img src="/assets/graphics/lookingeastyoga-logo.png" alt="Looking East Yoga"/>
              }
              {(title !== undefined && logo === false) &&
                <img className="small" src="/assets/graphics/lookingeastyoga-logo.png" alt="Looking East Yoga"/>
              }
              {title !== undefined &&
                <div className="title" dangerouslySetInnerHTML={{__html:title}} />
              }
              <span>
                <img src={background} alt=""/>
              </span>
              {this.props.children}
          </StyledHeader>
        );
    }
};

export default Header