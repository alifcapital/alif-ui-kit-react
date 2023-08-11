import React from 'react';
import ReactDOM from 'react-dom/client';

import { ButtonApp } from './components/Button';
import { InputApp } from './components/Input';
import { TextApp } from './components/Text';
import './index.css';
import { CheckboxApp } from './components/Checkbox';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='conatainer'>
      <CheckboxApp/>
      <br />
      <hr />
      <InputApp/>
      <br />
      <hr />
      <ButtonApp/>
      <hr />
      <TextApp />
    </div>
  </React.StrictMode>,
);
