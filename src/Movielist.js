import * as React from 'react';

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
