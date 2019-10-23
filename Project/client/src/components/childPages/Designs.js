import React from 'react'
import DataFile from '../../JsonData/DataFile.json';
import ImageFile from '../../JsonData/ImageFile.json';

const designs = (props) => {
return (
    <div>
        <div className ="data-add">
            <p>{DataFile.text}</p>
            <h3>{DataFile.asss}</h3>
            <h1>DEsigns></h1> 
        </div>
        <div className = "image-add">
        {imagegrabber(ImageFile.images)}
        </div>
    </div>
)
}
const imagegrabber =(json) =>{

    return (

        <div>
          {json.map((img) => 
            <div>
                <p>{img.src}</p>
                <img src={process.env.PUBLIC_URL+"/"+img.src} alt={img.alt} />
            </div>
          )
          }  

        </div>
    )



    
}
export default designs;

