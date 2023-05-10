import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import data from './data.json';

const App = () => {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    // Set the interviews state with the data from the JSON file
    setSections(data);
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        {sections.map((section) => (
          <div key={section.id}  style={{marginTop:'70px'}}>
            <h2>{section.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: ' 20px', marginTop: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: ' 20px' }}>
                <Card 
                    key={section.id}
                    title={section.card.title}
                    link={section.card.num}
                  />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: ' 40px' }}>
              <Card 
                  key={section.id}
                  title={section.card.title}
                  link={section.card.num}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: ' 40px' }}>
            <Card 
                key={section.id}
                title={section.card.title}
                link={section.card.num}
              />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: ' 40px' }}>
          <Card 
              key={section.id}
              title={section.card.title}
              link={section.card.num}
            />
        </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
