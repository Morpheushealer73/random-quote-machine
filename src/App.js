import React, {useState, useEffect} from 'react';
import './App.scss';
import colorArray from './colors.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const quotes = [
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: "Mark Twain"
  },
  {
    quote: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau"
  },
  {
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost"
  }
];

const Wrapper = ({children}) => {
  return <div className="wrapper" id="quote-box">{children}</div>;
};

function App() {
  const [randomNum, setRandomNum] = useState(0)
  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);
  const [elementColor, setElementColor] = useState('#282c34');
  const [active, setActive] = useState(true);

  useEffect(() => {
    // When the quote changes, start the transition
    setActive(false);
    const timeoutId = setTimeout(() => setActive(true), 500); // Match this with your CSS transition time
    return () => clearTimeout(timeoutId);
  }, [quote, author]);

  const changeQuote = () => {
      let rand = Math.floor(Math.random() * quotes.length);
      let newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
      setRandomNum(rand)
      setQuote(quotes[rand].quote);
      setAuthor(quotes[rand].author);
      setElementColor(newColor);
  }

  const elementStyle = {
    backgroundColor: elementColor,
    color: elementColor,
    transition: 'all 0.5s ease'
  }

  return (
      <div className="App">
      <header className="App-header" style={elementStyle}>
      
    <Wrapper>
        <h1 id="text" class={`quote-text ${active ? 'visible' : 'hidden'}`}>
          "{quote}"
        </h1>
        <h3 id="author" class={`quote-text ${active ? 'visible' : 'hidden'}`}>
          - {author}
        </h3>

        <div class="button-container">
              <a id="tweet-quote" href="twitter.com/intent/tweet" target="_self" style={elementStyle}>
              <FontAwesomeIcon icon={faTwitter} />
              </a>
              
              <button class="btn" id="new-quote" onClick={changeQuote} type="button"
                style={elementStyle}>
                New Quote
              </button>
        </div>
        
      <p class="myName">made by: Joshua Ian Española</p>
    </Wrapper>
      </header>
    </div>
  );
}

export default App;
