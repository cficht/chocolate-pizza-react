import React from 'react';
import './App.css';
import Header from './Header.js';
import Description from './Description.js';
import Recipe from './Recipe.js';
import Author from './Author.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header logo={"logo.png"} fb={"fb-icon.png"} twit={"twit-icon.png"} gp={"gp-icon.png"} insta={"insta-icon.png"} flic={"flic-icon.png"} pint={"pint-icon.png"} rss={"rss-icon.png"} mail={"mail-icon.png"}/>

      <Description print={"print-icon.png"} chocopizza={"choco-pizza.png"}/>

      <Recipe background={"list-bg.png"}/>

      <Author van={"van-pic.png"}/>

      <Footer smalllogo={"small-logo.png"}/>
    </div>
  );
}

export default App;
