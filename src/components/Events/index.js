import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

const StyledEvents = styled.ul`
    margin:25px 0 0;
	padding:0;
	p{
		font-size: 0.85rem;
	}
	li{
		margin:0 0 1rem;
		padding:0;
		list-style: none;
		font-size: 0.85rem;
		line-height: 1rem;
	}
	li span{
		margin:0 0 0 1rem;
		width:60%;
	}
	li span:nth-child(1){
		margin:0;
		width:40%;
	}
	li span img{
		height:auto;
		width:100%;
	}
	li h3, li p{
		margin:0 0 0.5rem;
		padding:0;
	}
	li p{
		line-height: 1.15rem;
    }
`;

const Events = () => {
	const data = useStaticQuery(
        graphql`
            query {
                allContentfulEvents {
                    edges {
                        node{
                            contentful_id
                            title
                            link
                            date
                            description {
                                description
                            }
                        }
                    }
                }
            }
        `
    )
    return (
        <StyledEvents>
            {data.allContentfulEvents.edges.map(( {node} ) => {
            return (
                <li key={node.contentful_id}>
                    <h3>{node.title}</h3>
                    <p>{node.description.description}</p>
                    <p>{node.date}</p>
                    {node.link !== null &&
                        <p><a href={node.link}>Learn more</a></p>
                    }
                </li>
            )
            })}
        </StyledEvents>
    )
}
export default Events;