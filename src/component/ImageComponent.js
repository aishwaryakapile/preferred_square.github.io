import React, { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash';

function ImageComponent({src, alt}) {

const [imageLoaded, setImageLoaded] = useState(false);
const [width, setWidth] = useState(300);
const [height, setHeight] = useState(400);


    useEffect(()=> {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
            setWidth(img.naturalWidth);
            setHeight(img.naturalHeight);
            console.log(width);
            console.log(height);
        }
        img.src = src

    }, [src,width,height])

    return (
        <>

            {imageLoaded ? "true" : "false"}
            <div style={{display: imageLoaded ? 'none' : 'block' }}>
                <Blurhash
                    hash="L185G_~XD40000oE%%8w0100XT9F"
                    width={width}
                    height={height}
                />
            </div>

          
            <img 
                src={src}
                alt={alt}
                style={{display: imageLoaded ? 'block' : 'none' }}
            />
        
        </>

  )
}

export default ImageComponent