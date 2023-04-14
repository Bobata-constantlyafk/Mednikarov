import React, { useEffect } from 'react';
import './Home.css';
import homeImage from '../../images/IvanNoBG.png';

function Home() {
  useEffect(() => {
    const leftHeading = document.querySelector('#home-text-left h2');
    const leftParagraph = document.querySelector('#home-text-left p');
    const rightHeading = document.querySelector('#home-text-right h2');
    const rightParagraph = document.querySelector('#home-text-right p');

    if (leftHeading && leftParagraph && rightHeading && rightParagraph) {
      leftParagraph.style.width = `${leftHeading.offsetWidth}px`;
      rightParagraph.style.width = `${rightHeading.offsetWidth}px`;
    }
  }, []);
  return (
    <div id="home-page">
      <div className='under-construction'>
        <h1>under construction</h1>
      </div>
      <div id="home-text-left">
        <h2>lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
      </div>
      <div id="home-image">
        <img src={homeImage} alt="My face" />
      </div>
      <div id="home-text-right">
          <h2>ipsum lorem</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae </p>
      </div>
    </div>
  );
}

export default Home;
