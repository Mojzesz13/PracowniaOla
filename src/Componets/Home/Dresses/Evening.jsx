import React from 'react';
import Lightbox from '../../common/lightbox';
import MobileGallery from '../../common/mobileGallery';
import { eveningData } from '../../common/galleryDataBase';

const Evening = ({ isMobile }) => {
  if (isMobile) {
    return (
      <MobileGallery
        imageData={eveningData}
        id="eveningDressesM"
        title="Suknie wieczorowe"
      />
    );
  }
  return <Lightbox imageData={eveningData} />;
};

export default Evening;
