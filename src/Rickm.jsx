import React, { useState, useEffect } from 'react';

function Rickm() {
  const [dataType, setDataType] = useState("characters");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let endPoint = '';
      if (dataType === "characters") {
        endPoint = "https://rickandmortyapi.com/api/character";
      } else if (dataType === "episodes") {
        endPoint = "https://rickandmortyapi.com/api/episode";
      } else {
        endPoint = "https://rickandmortyapi.com/api/location";
      }

      
        const response = await fetch(endPoint);
        const data = await response.json();
      
        setItems(data.results); 
    };

    fetchData();
  }, [dataType]);

  return (
    <div>
      <h1>RICK AND MORTY EXPLORER</h1>
      <select name="value" id="value" value={dataType} onChange={(e) => setDataType(e.target.value)}>
        <option value="characters">Characters</option>
        <option value="episodes">Episodes</option>
        <option value="location">Locations</option>
      </select>

      <div>
        <h2>{dataType}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name || item.title}</li> 
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Rickm;