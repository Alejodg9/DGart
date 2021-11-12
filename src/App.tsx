import React, { useState } from 'react';

import { Landing } from './components/landing/landing';
import { Slider } from './components/slider/slider';
import { Animal } from './interfaces/animals';

function Series() {
  const [item, setItem] = useState<number>(0);

  const list: Animal[] = [
    {
      species: 'Collages Fotográficos',
      age: 2,
      bio: 'Love snacks',
      url: 'https://i.ibb.co/dJ53J5m/1-el-secreto-1.jpg'
    },
    {
      species: 'Serie 2',
      age: 8,
      bio: 'Love shrimps',
      url: 'https://i.ibb.co/nCxnrMS/2.png'
    },
   /*   {
      species: 'Siberian Tiger',
      age: 9,
      bio: 'Hate Elefants',
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/tiger2.jpg'
    },
    {
      species: 'Brown Bear',
      age: 12,
      bio: 'Love salmon',
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/bear2.jpg'
    },  */
  ]

  return (
    <div className="App">
      
      <Landing animals={list} item={item}></Landing>
      <Slider onItem={(index: number) => setItem(index)} size={list.length}></Slider>
    </div>
  );
}

export default Series;
