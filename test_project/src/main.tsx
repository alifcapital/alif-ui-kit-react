import React from 'react';
import ReactDOM from 'react-dom/client';

import { ButtonApp } from './components/Button';
import { InputApp } from './components/Input';
import { TextApp } from './components/Text';
import { CheckboxApp } from './components/Checkbox';
import { SwitchApp } from './components/Switch';
import { TabsApp } from './components/Tabs';
import { AccordionApp } from './components/Accordion';
import './index.css';
import { TagsApp } from './components/Tags';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='conatainer'>
    <TagsApp/><br /><hr />
    <AccordionApp/><br /><hr />
    <TabsApp/><br /><hr />
    <SwitchApp/><br /><hr />
    <CheckboxApp/><br /><hr />
    <InputApp/><br /><hr />
    <ButtonApp/><hr />
    <TextApp />
    </div>
  </React.StrictMode>,
);
