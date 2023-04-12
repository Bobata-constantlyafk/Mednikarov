import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me-container" id='about-me'>
        <div className="r1-c1">
          <h1>Ivan * Mednikarov</h1>
          <p>Top frontend and design dev</p>
        </div>

        <div className="r1-c2">
          <h1>I am momcheto I have been hustling for a lonng long while now. So you better hire me, Yaauuurdd, dorko.</h1>
          <p>Батко тука просто трябва да има някаквъ малък текст колкото да има нещо, раираш ли момчето?.
          Батко тука просто трябва да има някаквъ малък текст колкото да има нещо, раираш ли момчето?.
          Батко тука просто трябва да има някаквъ малък текст колкото да има нещо, раираш ли момчето?.
          Батко тука просто трябва да има някаквъ малък текст колкото да има нещо, раираш ли момчето?.
          </p>
        </div>

        <div className="r2-c2">
          <div className='city'>
            <h1>Made in</h1>
            <p>Varna, Bulgaria</p>
          </div>
          <div className='dob'>
            <h1>D.O.B.</h1>
            <p>JAN 7th, 1999</p>
          </div>
          <div className='hustle'>
            <h1>Been huslin</h1>
            <p>SEP 11th, 2001</p>
          </div>
        </div>

        <div className="r3 grid-col-span-2">
          <div className='card1'>
            <h1>5</h1>
            <p>Websites</p>
          </div>
          <div className='card2'>
            <h1>2</h1>
            <p>Bachelor degrees</p>
          </div>
          <div className='card3'>
            <h1>2</h1>
            <p>missed flights (for a day)</p>
          </div>
        </div>

    </div>
  );
}

export default AboutMe;
