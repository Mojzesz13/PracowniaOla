import React from 'react';
import Lightbox from '../../common/lightbox';
import MobileGallery from '../../common/mobileGallery';
import { weddingData } from '../../common/galleryDataBase';

const Wedding = ({ isMobile }) => {
  if (isMobile) {
    return (
      <MobileGallery
        imageData={weddingData}
        id="weddingDressesM"
        title="Suknie ślubne"
      />
    );
  }
  return <Lightbox imageData={weddingData} />;
};

export default Wedding;
