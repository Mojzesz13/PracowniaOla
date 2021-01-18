import React, { useState } from 'react';
import Pagination from './pagintion';
import './lightbox.scss';
import { paginate } from '../../utilis/paginate';
import DecorationBar from './decorationBar';
import Footer from '../Home/Footer/Footer';

const Lightbox = ({ imageData, id, title }) => {
  const [dispImg, setDispImg] = useState('');
  const [cardIndex, setCardIndex] = useState(1);
  const [dispImgStyle, setDispImgStyle] = useState({ display: 'none' });
  const [currentPage, setCurrentPage] = useState(1);

  let itemCount = imageData.length;
  let pageSize = 8;

  const handleShowImage = (e) => {
    e.preventDefault();
    setDispImg(imageData[Number(e.target.id)].image);
    setCardIndex(Number(e.target.id));
    setDispImgStyle({ display: 'flex' });
  };

  const handleClose = (e) => {
    e.preventDefault();
    setDispImgStyle({ display: 'none' });
  };

  const handlePrevShow = (e) => {
    e.preventDefault();
    if (cardIndex === 0) {
      setCardIndex(itemCount - 1);
      setDispImg(imageData[itemCount - 1].image);
    } else {
      let decrement = cardIndex - 1;
      setDispImg(imageData[decrement].image);
      setCardIndex(decrement);
    }
  };

  const handleNextShow = (e) => {
    e.preventDefault();
    if (cardIndex === itemCount - 1) {
      setCardIndex(0);
      setDispImg(imageData[0].image);
    } else {
      let increment = cardIndex + 1;
      setDispImg(imageData[increment].image);
      setCardIndex(increment);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = (e) => {
    e.preventDefault();
    if (currentPage === 1) return null;
    setCurrentPage((prevStage) => prevStage - 1);
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    if (currentPage === itemCount / pageSize) return null;
    setCurrentPage((prevStage) => prevStage + 1);
  };

  const card = imageData.map((obj, index) => {
    return (
      <div className='cardContainer' key={index}>
        <img src={obj.image} id={index} alt={obj.title} />
        <div className='cardInfo' id={index} onClick={handleShowImage}>
          <h1 className='cardTitle'>{obj.title}</h1>
        </div>
      </div>
    );
  });

  const gallery = paginate(card, currentPage, pageSize);

  return (
    <>
      <section className='cardHolder' id={id}>
        <DecorationBar title={title} />
        {gallery}
      </section>
      <Pagination
        itemCount={itemCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        prevPage={handlePrevPage}
        nextPage={handleNextPage}
      />
      <section className='lightbox' style={dispImgStyle}>
        <div className='carousel left' onClick={handlePrevShow}>
          <span></span>
          <span></span>
        </div>
        <div className='imgHolder' onClick={handleClose}>
          <img src={dispImg} alt={dispImg} onClick={handleClose} />
        </div>
        <div className='carousel right' onClick={handleNextShow}>
          <span></span>
          <span></span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Lightbox;
