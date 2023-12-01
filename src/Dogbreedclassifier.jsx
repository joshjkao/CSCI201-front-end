import React, { useState } from 'react';
import './Dogbreedclassifier.css'; // Import your CSS file

export default function DogBreedClassifier() {
  const [imageLink, setImageLink] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
  };

  const handleSearch = () => {
    fetch(`https://b10d-34-173-183-196.ngrok.io/?imageLink=${imageLink}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(`${data}`);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setSearchResults('Error fetching data. Please try again.');
      });
  };

  return (
    <div>
      <h1>Dog Breed Classifier</h1>

      <div>
        <label htmlFor="imageLink">Image Link:</label>
        <input
          type="text"
          id="imageLink"
          value={imageLink}
          onChange={handleImageLinkChange}
        />
      </div>

      {/* Button to Trigger Search */}
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* White Box for Results */}
      <div className="white-box">
        <h2>Breed:</h2>
        <div className="results-content">{searchResults}</div>
        {/* You can replace the above line with the actual search results */}
      </div>
    </div>
  );
}
