import React, { useState } from 'react';
import './App.css';

const App = () => {
  const DropdownMenu = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };

    return (
      <div className="component">
        <h2>Dropdown Menu</h2>
        <div className="dropdown">
          <select onChange={(e) => handleOptionSelect(e.target.value)}>
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        {selectedOption && <p>Selected Option: {selectedOption}</p>}
      </div>
    );
  };

  const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const autoScroll = () => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    };

    React.useEffect(() => {
      const interval = setInterval(autoScroll, 5000);
      return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
      <div className="component">
        <h2>Carousel</h2>
        <div className="carousel">
          <img src={`./images/${images[currentImageIndex]}`} alt="carousel" width="25%" />
        </div>
      </div>
    );
  };

  const Rating = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
      setRating(value);
    };

    return (
      <div className="component">
        <h2>Rating</h2>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRatingChange(star)}
              className={star <= rating ? 'active' : ''}
              style={{ cursor: 'pointer', fontSize: '30px', color: star <= rating ? 'gold' : 'gray' }}
            >
              ★
            </span>
          ))}
        </div>
        <p>You rated this app: {rating} stars</p>
      </div>
    );
  };

  const ProgressBar = ({ progress }) => {
    return (
      <div className="component">
        <h2>Progress Bar</h2>
        <div className="progress-container">
          <div className="progress" style={{ width: '60%', backgroundColor: '#ddd' }}>
            <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: 'red', height: '20px' }}></div>
          </div>
        </div>
      </div>
    );
  };

  const Notification = ({ message }) => {
    const handleNotificationClick = () => {
      alert("Intruder is here!"); 
    };

    return (
      <div className="component">
        <h2>Notification</h2>
        <div className="notification" onClick={handleNotificationClick}>
          <span>{message}</span>
          <button>Click here</button>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="title" align="center"><b>---    CWS TA - II   ---</b></h1>
      <hr></hr>
      <DropdownMenu options={['Option 1', 'Option 2', 'Option 3']} />
      <br></br>
      <hr></hr>
      <Carousel images={['image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg','image5.jpg','image6.jpg']} />
      <br></br>
      <hr></hr>
      <Rating />
      <hr></hr>
      <ProgressBar progress={40} />
      <br></br>
      <hr></hr>
      <Notification message="To get a notification.  " />
    
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default App;