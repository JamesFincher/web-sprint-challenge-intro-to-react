import React, { useState, useEffect } from 'react';
import CharStyle from './theme/char.styles.js';
export default function Character(props) {
  console.log(props);
  const { data } = props.data;
  const charArr = [...props.data];

  function renderCharacters() {
    return charArr.map((char) => {
      return (
        <>
          <CharStyle>
            <div key={char.name}>
              <h3>{char.name}</h3>
              <p>{char.height}</p>
              <p>{char.birth_year}</p>
            </div>
          </CharStyle>
        </>
      );
    });
  }

  return <div>{renderCharacters()}</div>;
}
