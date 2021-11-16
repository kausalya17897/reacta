import * as React from 'react';
import {Msg} from './Msg.js';
export default function Movielist({ movie }) {
  return (
    <div className="movielist">
      {movie.map(({ name, poster, rating, summary }) => (
        <Msg
          name={name} poster={poster} rating={rating} summary={summary} />
      ))}
    </div>
  );
}
export{Movielist};