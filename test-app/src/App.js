// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Product from "./components/module-1/Product";
import product from "./components/module-1/product.json";
import Counter from "./components/module-4/Counter";
import CounterTwo from "./components/module-4/CounterTwo";
import CounterThird from "./components/module-4/CounterThird";

export const App = () => { 
  return <div className = "AppWrap">
    <Product
      productImg={product.productImg}
      productName={product.productName}
      productPrice={product.productPrice}
    />
    <Counter />
    <CounterTwo />
    <CounterThird />
  </div>
};