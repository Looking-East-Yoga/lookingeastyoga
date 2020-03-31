import React from 'react'
import styled from 'styled-components';

const data = [
    {
        "link": "https://www.instagram.com/p/BppD3malRWv/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/44395404_560351187737688_6040749343661812127_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=hMfmFe9EDw4AX9S1P5D&oh=df80cb626d0bda3e2ed3f788357305d7&oe=5EAB995A"
        },
        "caption":{
            "text":"A yoga journey in India. Enlightening. @sriramashram"
        }
    },
    {
        "link": "https://www.instagram.com/p/BryjTEFlHlt/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/46895296_358396571644650_9112277154341277895_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=b9q3peCQ8OYAX-furlV&oh=b8d87e38dbb94139052c03f1ad50c146&oe=5EACAF7E"
        },
        "caption":{
            "text":"I breathe in what you exhale. We are intertwined and connected. We respect each other. Nature. Peace to all things."
        }
    },
    {
        "link": "https://www.instagram.com/p/BqiG2-fl-5K/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/44774047_352588092171541_2773183905904768508_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=2um9kuFtIGYAX-TTbIm&oh=d6c26e2894a9552228d7e853120b0c68&oe=5EAAFD4F"
        },
        "caption":{
            "text":"Good thoughts, North End, Boise, Idaho."
        }
    },
    {
        "link": "https://www.instagram.com/p/BwDaCKVlAzb/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/56848809_1186817861480429_3232857584130874407_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=klnAYQRbsiUAX8J8OgK&oh=325ea7d4556b166a3cdfd04470769c93&oe=5EAD4FF5"
        },
        "caption":{
            "text":"Find yourself in nature."
        }
    },
    
    {
        "link": "https://www.instagram.com/p/BzzAbhznSQb/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/65851459_214623219506225_8509797436681895073_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=um9MTqdzYRwAX-VZ8u9&oh=b4dec5e587c4aaf2fa4b997836f6b59a&oe=5EACB15F"
        },
        "caption":{
            "text":"Taking a moment to live."
        }
    },
    {
        "link": "https://www.instagram.com/p/Bz_4yKBHkGt/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/66067688_393837251261835_1460803263169516069_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=fr1B0j0SK-EAX8d3mZd&oh=95843507051d6eb54e77f44366dfadce&oe=5EACF981"
        },
        "caption":{
            "text":"Full Moon vibes. Positive energy for the heart and soul."
        }
    },
    {
        "link": "https://www.instagram.com/p/B0cPmjWHlRJ/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/67065794_746489335789032_2566535335249965580_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=yMYSWe2AVrIAX_IfCkl&oh=91d3660b26889d171ddd83c0105dcea8&oe=5EAB0967"
        },
        "caption":{
            "text":"Om mani padme hum. Thanks Auntie Mary & Uncle Kevin!"
        }
    },
    {
        "link": "https://www.instagram.com/p/B6gjc2yHmIx/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/79466335_157022485605992_4221980955883073631_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=LkVmpUa9ukQAX-e9uDY&oh=0771c9a3af873d8dcd4abe78462607e2&oe=5EAD242A"
        },
        "caption":{
            "text":"Peace to all"
        }
    },
    {
        "link": "https://www.instagram.com/p/B7JevZxF356/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/81239358_1581324198684901_6957072937713348966_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=0f3qtkz4CDUAX_VXqpj&oh=d7db1a67c08499a05b7865e6812d0665&oe=5EAB479C"
        },
        "caption":{
            "text":"Friday, playing hooky"
        }
    },
    {
        "link": "https://www.instagram.com/p/BpstMCmlTlK/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/43913551_1102263523273466_311513477008420870_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=vh_OQ0x33j8AX_2gLlx&oh=769abb64b7f6e9e194e1329f5d1360a9&oe=5EACF3BB"
        },
        "caption":{
            "text":"Down the steps to the Ganges."
        }
    },
    {
        "link": "https://www.instagram.com/p/BqGbb4llrf7/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/44707347_316103568986518_4709409900498819189_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=HZWy2WH8za8AX-REFmL&oh=d1203ff21a532c0381c47cecc8dc80fe&oe=5EAD4018"
        },
        "caption":{
            "text":"I believe these “what ifs” to be the truth."
        }
    },
    {
        "link": "https://www.instagram.com/p/BnfHVtHgBvj/",
        "image":{
            "url":"https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/40228484_2400288109988914_1092590059397302707_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=wmBZ9fQqzFsAX-eVezX&oh=13d70a0408027e1133a91387926b51a3&oe=5EAA27BB"
        },
        "caption":{
            "text":"In the moment. Ahhhhh"
        }
    },
    
]
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

  return (
    <StyledGallery>
        <ul>
        {
        data.map(({ caption, link, image }, index) => {
            return (
                <li><a href={link} target="_blank" rel="noopener noreferrer"><img
                    key={index}
                    src={image.url}
                    alt={caption.text}
                /></a></li>
            )
        })}
        </ul>
    </StyledGallery>
  )
}
export default Gallery