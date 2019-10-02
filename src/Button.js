import React, { Button } from 'react';

export const Button = (props) => {
  return (
    <button style={{width: props.width, backgroundColor: 'grey', fontFamily: 'sansSerif', color: 'black'}}> {{props.label}}</button>
  );
}

<button label="submit" width="50px" />