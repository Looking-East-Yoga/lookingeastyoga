import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const StyledButton = styled.a`
	display: inline-block;
	margin:1rem 0 1rem;
	padding: .5rem 1rem;
	font-size:0.85rem;
    border-width:2px;
    border-style:solid;
    font-weight:bold;
    border-color: rgba(253,173,53,1.0);
	color: rgba(253,173,53,1.0);
	text-decoration: none;
    cursor: pointer;
    transition:all 200ms;
    &:hover{
        color:#FFF;
        background-color:rgba(253,173,53,1.0);
    }
    &.small{
        font-weight:normal;
        border-width:1px;
        padding:0.15rem 0.35rem;
        font-size:0.65rem;
    }
    &.black{
        color:#000;
        border-color:#000;
        &:hover{
            color:#FFF;
            background-color:#000;
        }
    }
    
}
`;

class Button extends React.Component {
    render () {
        const {href,children} = this.props;
        const btnClass = classNames(this.props.size, this.props.color);
        return (
          <StyledButton className={btnClass} href={href}>
            {children}
          </StyledButton>
        );
    }
};

export default Button