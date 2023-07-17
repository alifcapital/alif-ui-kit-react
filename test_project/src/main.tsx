import React from 'react';
import ReactDOM from 'react-dom/client';

import { Text } from '../../src';

import './index.css';

const TextApp: React.FC = () => {
  return (
    <div>
      <Text>Text Default</Text>
      <br />
      <Text bold>Text Bold</Text>
      <br />
      <Text underline>Text Bold</Text>
      <br />
      <Text uppercase>Text Bold</Text>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='conatainer'>
      <TextApp />
    </div>
  </React.StrictMode>,
);
