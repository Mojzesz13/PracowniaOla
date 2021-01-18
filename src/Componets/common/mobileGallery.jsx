import React from 'react';
import { Link } from 'react-router-dom';
import './mobileGallery.scss';
import DecorationBar from './decorationBar';
import ButtonGallery from './buttonGallery';

const MobileGallery = ({ imageData, id, title }) => {
  const linkPath = `/${id}`;

  return (
    <div className="galeryContainer" id={id}>
      <DecorationBar title={title} />
      <ul>
        {imageData
          .map((obj, index) => (
            <li key={index} className={obj.cName}>
              <img src={obj.image} alt={obj.title}></img>
            </li>
          ))
          .slice(0, 3)}
      </ul>
      <Link to={linkPath}>
        <ButtonGallery buttonName={'Galeria'} />
      </Link>
    </div>
  );
};

export default MobileGallery;

//
//
//
//
//
// import React, { useState } from 'react';
// import './mobileGallery.scss';

// const MobileGallery = ({ imageData }) => {
//   const [click, setClick] = useState('test3');

//   const handleShowList = () => {
//     if (click === 'test3') {
//       setClick('test4');
//       console.log('3 dziala');
//     } else if (click === 'test4') {
//       setClick('test3');
//       console.log('4 dziala');
//     }
//   };

//   return (
//     <>
//       <div className="GaleryContainer" id="evening">
//         <ul className={click}>
//           {imageData.map((obj, index) => (
//             <li key={index} className="test" style={{ display: click }}>
//               <img src={obj.image} alt={obj.title}></img>
//             </li>
//           ))}
//         </ul>
//         <button onClick={handleShowList}>Test</button>
//       </div>
//     </>
//   );
// };

//
//
//
//
//
// export default MobileGallery;

// import React, { useState, useEffect } from 'react';

// const postsPerPage = 3;
// let arrayForHoldingPosts = [];

// const Mobileallery = ({ imageData }) => {
//   const [postsToShow, setPostsToShow] = useState([]);
//   const [next, setNext] = useState(3);

//   const loopWithSlice = (start, end) => {
//     const slicedPosts = imageData.slice(start, end);
//     arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
//     setPostsToShow(arrayForHoldingPosts);
//   };

//   useEffect(() => {
//     loopWithSlice(0, postsPerPage);
//   }, []);

//   const handleShowMorePosts = () => {
//     loopWithSlice(next, next + postsPerPage);
//     setNext(next + postsPerPage);
//   };

//   const testtestow = postsToShow;

//   return (
//     // <Lightbox imageData={imageData} id="evening" title={'Suknie Wieczorowe'} />

//     <div className="GaleryContainer" id="evening">
//       <div className="content">
//         <ul>
//           {testtestow.map((post, index) => (
//             <li key={index}>
//               <img
//                 style={{ width: '20rem', height: '30rem' }}
//                 src={post.image}
//                 alt={post.title}
//               ></img>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button onClick={handleShowMorePosts}>Load more</button>
//     </div>
//   );
// };

// export default Mobileallery;
