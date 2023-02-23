import React from 'react';

function Footer() {
  const names = ['Steve A.', 'Robson H.', 'William E.', 'Harshil M.', 'Jamie G.'];

  const nameElements = names.map((name, index) => (
    <span key={index} style={{ fontWeight: 'bold', marginLeft: '20px', marginRight: '20px' }}>
      {name}
    </span>
  ));

  return (
    <footer style={{ background: `linear-gradient(to right, rgba(255, 158, 0, 0.4), rgba(255, 0, 0, 0.4) 35%, rgba(181, 0, 125, 0.4), rgba(33, 66, 156, 0.4), rgba(0, 113, 255, 0.4))`, padding: '10px' }}>
      <em>Created by</em> - <div style={{ display: 'flex', flexWrap: 'wrap' }}>{nameElements}</div> 
    </footer>
  );
}

export default Footer;