import React from 'react';
import ReactDOM from 'react-dom/client';

import { ButtonApp } from './components/Button';
import { InputApp } from './components/Input';
import { TextApp } from './components/Text';
import { CheckboxApp } from './components/Checkbox';
import { SwitchApp } from './components/Switch';
import { AccordionApp } from './components/Accordion';
import { TabsApp } from './components/Tabs';
import { TagsApp } from './components/Tags';
import { SwitchTagsApp } from './components/SwitchTags';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='conatainer'>
      <SwitchTagsApp/><br /><hr />
      <TagsApp/><br /><hr />
      <TabsApp/><br /><hr />
      <AccordionApp/><br /><hr />
      <SwitchApp/><br /><hr />
      <CheckboxApp/><br /><hr />
      <InputApp/><br /><hr />
      <ButtonApp/><hr />
      <TextApp />
    </div>
  </React.StrictMode>,
);
