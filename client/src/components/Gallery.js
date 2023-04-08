import React from 'react';
import ImageGallery from 'react-image-gallery';

export default function Gallery() {
  const images = [
    {
      original:"/pictures/cafe1-640x427.jpg",
      thumbnail:"/pictures/cafe1-180x100.jpg",
    },
    {
      original:"/pictures/cafe2-640x427.jpg",
      thumbnail:"/pictures/cafe2-180x100.jpg",
    },
    {
      original:"/pictures/cafe3-640x427.jpg",
      thumbnail:"/pictures/cafe3-180x100.jpg",
    },
    {
      original:"/pictures/cafe8-640x427.jpg",
      thumbnail:"/pictures/cafe8-180x100.jpg",
    },
    {
      original:"/pictures/cafe10-640x427.jpg",
      thumbnail:"/pictures/cafe10-180x100.jpg",
    },
  ]
  return (
    <div className='gallery'>
      <ImageGallery items={images} />
    </div>
  )
}