// import React, { useEffect, useState } from 'react';
// import './progressBar.scss';

// const ProgressBar = ({ max }) => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setValue((oldValue) => {
//         let newValue = oldValue + 0.5;
//         if (newValue === 100) {
//           setValue(0);
//         }
//         // if (newValue === 101) {
//         //   clearInterval(interval);
//         // }

//         // setTimeout((_) => {
//         //   clearInterval(interval);
//         // }, 14500);

//         return newValue;
//       });
//     }, 20);
//   }, []);

//   return <progress value={value} max={max} />;
// };

// export default ProgressBar;
