import React from 'react';
import Instafeed from 'react-instafeed'

const options = {
    accessToken: '1340935725.cf41341.5e70c44d17a640649474439ef6dccae0',
    clientId: 'cf41341954c5406bb79bd631c854f426',
    get: 'user',
    resolution: 'standard_resolution',
    sortBy: 'none',
    userId: 1340935725,
    limit:8
}
class Gallery extends React.Component {
    componentDidMount(){
        console.log(data.data);
    }
    render () {
        const data = Instafeed(options)
        return(
            <div>
            {data && data.map(({ caption, id, images, tags }, index) => {
                <li><img
                key={index}
                src={images[options.resolution].url}
                title={caption.text}
                caption={caption.text}
                width={images[options.resolution].width}
                height={images[options.resolution].height}
                /></li>
            })}
            </div>
        )
        
    }
};
export default Gallery;