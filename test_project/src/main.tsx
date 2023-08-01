import React from 'react';
import ReactDOM from 'react-dom/client';

import { ButtonApp } from './components/Button';
import { InputApp } from './components/Input';
import { TextApp } from './components/Text';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='conatainer'>
      <InputApp/>
      <br />
      <hr />
      <ButtonApp/>
      <hr />
      <TextApp />
    </div>
  </React.StrictMode>,
);
