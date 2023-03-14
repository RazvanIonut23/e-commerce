// import React, { useEffect, useState } from "react";
// import s from "./Products.module.css";
// import { Box, Slider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import search from "../../images/search.svg";

// const Filters = (props, products) => {
//   const [filters, setFilters] = useState([]);

//   const [xx, setXX] = useState([0, 0, 0, 0, 1]);
//   const handleFilterClick = (i) => {
//     let aux = [0, 0, 0, 0, 0];
//     aux[i] = 1;
//     setXX(aux);
//   };

//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#c62828",
//         darker: "#c62828",
//       },
//       neutral: {
//         main: "#64748B",
//         contrastText: "#fff",
//       },
//     },
//   });

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/categories`)
//       .then((res) => res.json())
//       .then((response) => {
//         setFilters(response.data);
//         console.log(response);
//       });
//   }, []);

//   useEffect(() => {
//     if (xx.indexOf(1) != -1) {
//       if (xx.indexOf(1) == 0) {
//         fetch(`https://fakestoreapi.com/products/category/men's clothing`)
//           .then((res) => res.json())
//           .then((data) => {
//             props.setImg(data);
//           });
//       }
//       if (xx.indexOf(1) == 1) {
//         fetch(`https://fakestoreapi.com/products/category/women's clothing`)
//           .then((res) => res.json())
//           .then((data) => {
//             props.setImg(data);
//           });
//       }
//       if (xx.indexOf(1) == 2) {
//         fetch(`https://fakestoreapi.com/products/category/jewelery`)
//           .then((res) => res.json())
//           .then((data) => {
//             props.setImg(data);
//           });
//       }
//       if (xx.indexOf(1) == 3) {
//         fetch(`https://fakestoreapi.com/products/category/electronics`)
//           .then((res) => res.json())
//           .then((data) => {
//             props.setImg(data);
//           });
//       }
//       if (xx.indexOf(1) == 4) {
//         fetch(`https://fakestoreapi.com/products`)
//           .then((res) => res.json())
//           .then((data) => {
//             props.setImg(data);
//           });
//       }
//     }
//   }, [xx]);

//   return (
//     <div className={s.filtersContainer}>
//       <div className={s.searchInput}>
//         <input type="text" placeholder="Search" />
//         <p>Search</p>
//       </div>
//       <div className={s.filtersLeft}>
//         <p>Category: </p>
//         <div className={s.filter}>
//           <input
//             type="checkbox"
//             id="filetr1"
//             checked={xx.indexOf(1) === 0 ? true : false}
//             onChange={() => handleFilterClick(0)}
//           />
//           <label htmlFor="filter1">
//             Man<span>1</span>
//           </label>
//         </div>
//         <div className={s.filter}>
//           <input
//             type="checkbox"
//             id="filetr2"
//             checked={xx.indexOf(1) === 1 ? true : false}
//             onChange={() => handleFilterClick(1)}
//           />
//           <label htmlFor="filter2">
//             Woman<span>1</span>
//           </label>
//         </div>
//         <div className={s.filter}>
//           <input
//             type="checkbox"
//             id="filetr3"
//             checked={xx.indexOf(1) === 2 ? true : false}
//             onChange={() => handleFilterClick(2)}
//           />
//           <label htmlFor="filter3">
//             Jewelery<span>1</span>
//           </label>
//         </div>
//         <div className={s.filter}>
//           <input
//             type="checkbox"
//             id="filetr4"
//             checked={xx.indexOf(1) === 3 ? true : false}
//             onChange={() => handleFilterClick(3)}
//           />
//           <label htmlFor="filter4">
//             Electronics<span>1</span>
//           </label>
//         </div>
//         <div className={s.filter}>
//           <input
//             type="checkbox"
//             id="filetr4"
//             checked={xx.indexOf(1) === 4 ? true : false}
//             onChange={() => handleFilterClick(4)}
//           />
//           <label htmlFor="filter4">
//             All products<span>1</span>
//           </label>
//         </div>
//       </div>
//       <div className={s.priceFilter}>
//         <label htmlFor="price">
//           Price<span>199.99$</span>
//         </label>
//         <Box max-width={300}>
//           <Slider
//             id="price"
//             theme={theme}
//             min={0}
//             max={999.99}
//             aria-label="Default"
//             valueLabelDisplay="auto"
//           />
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default Filters;
