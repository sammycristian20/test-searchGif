import React from 'react';
import Gifes from './Gifes';
import NoGifs from './NoGifs';

const GifList = props => { 
  
  const results = props.data;
  let gifs;
  if (results.length) {
    gifs = results.map(gif => <Gifes url={gif.images.fixed_height.url} key={gif.id}  onGifSelect={props.onGifSelect} />);    
  } else {
    gifs = <NoGifs />
  }

  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
