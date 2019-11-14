import React from 'react'
import { buildUrl } from 'react-instafeed'
import useAbortableFetch from 'use-abortable-fetch'
import styled from 'styled-components';

const options = {
    accessToken: '1340935725.cf41341.5e70c44d17a640649474439ef6dccae0',
    clientId: 'cf41341954c5406bb79bd631c854f426',
    get: 'user',
    resolution: 'standard_resolution',
    sortBy: 'none',
    userId: 1340935725,
    limit:12
}

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
  const { data, loading, error, abort } = useAbortableFetch(buildUrl(options))
  
  if (loading) return (<div>Loading...</div>)
  if (error) return (<div>Error: ${error}</div>)
  if (!data) return (<div>Error: No JSON</div>)

  return (
    <StyledGallery>
        <ul>
        {
        data &&
        data.data.map(({ caption, link, images }, index) => {
            const image = images[options.resolution]
            return (
                <li><a href={link} target="_blank"><img
                    key={index}
                    src={image.url}
                    title={caption.text}
                    caption={caption.text}
                /></a></li>
            )
        })}
        </ul>
    </StyledGallery>
  )
}
export default Gallery