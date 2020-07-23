import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
//import Img from "gatsby-image"

const StyledGallery = styled.div`
	margin:0;
	padding:1rem 0 0;
	width: 100%;
	ul{
        margin:0;
        padding:0;
        li{
            display:inline-block;
            margin:0 0.5% 1% 0.5%;
            width: 24%;
            height:auto;
            overflow:hidden;
        }
        a{
            display: block;
            width:100%;
            border:0;
            text-align: center;
        }
        img{
            height:auto;
            width: 100%;
            vertical-align: top;
        }
    }

`;
const Gallery = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulPhotos {
                    edges {
                      node {
                        link
                        image {
                            title
                            file {
                                url
                            }
                        }
                      }
                    }
                }
            }
        `
    )
    return (
        <StyledGallery>
            <ul>
            {data.allContentfulPhotos.edges.map(({node}, index) => {
                return (
                    <li>
                        <a href={node.link} target="_blank" rel="noopener noreferrer">
                            <img
                                key={index}
                                src={node.image.file.url}
                                alt={node.image.title}
                            />
                        </a>
                    </li>
                )
            })}
            </ul>
        </StyledGallery>
    )
}
export default Gallery