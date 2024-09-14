import React, { useState, useEffect, useContext } from 'react';
import './App.css'; // Adjust import path

// Create a context for the likes state
const LikesContext = React.createContext();

// Custom hook to consume LikesContext
const useLikesContext = () => useContext(LikesContext);

const UseStateComponent = () => {
  const [color, setColor] = useState('black');
  const [contentVisible, setContentVisible] = useState(true);
  const [likes, setLikes] = useState(0);

  // Effect for changing color when content visibility changes
  useEffect(() => {
    setColor(contentVisible ? 'black' : 'grey');
  }, [contentVisible]);

  // Toggle content visibility
  const toggleContentVisibility = () => {
    setContentVisible(!contentVisible);
  };

  // Handle content button click
  const handleContentButtonClick = () => {
    alert('Content button clicked');
    toggleContentVisibility();
  };

  // Increment likes
  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    
    <div className="box" style={{ backgroundColor: color }}>
      <button className="toggle-btn" onClick={() => setColor(color === 'black' ? 'grey' : 'black')}>Toggle</button>
      <button className="content-btn" onClick={handleContentButtonClick}>Content</button>
      <LikesContext.Provider value={{ likes, incrementLikes }}>
        {contentVisible && (
          <Content />
        )}
      </LikesContext.Provider>
    </div>
  );
};

// Component to render content
const Content = () => {
  const { likes, incrementLikes } = useLikesContext();

  return (
    <div className="content" style={{ color: 'white' }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.
      </p>
      <div className="like-section">
        <button onClick={incrementLikes}>Like</button>
        <span style={{ color: 'white' }}>{likes}</span>
      </div>
    </div>
  );
};

export default UseStateComponent;
