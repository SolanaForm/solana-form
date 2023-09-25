import yayJpg from '../assets/yay.jpg';



import React from 'react';
import SchemaBuilder from '@xrenders/schema-builder';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <div style={{ height: '80vh' }}>
        <SchemaBuilder importBtn={true} exportBtn={true} pubBtn={false} />
      </div>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
