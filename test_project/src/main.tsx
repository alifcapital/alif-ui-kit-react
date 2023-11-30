import React from 'react';
import ReactDOM from 'react-dom/client';

import { ButtonApp } from './components/Button';
import { InputApp } from './components/Input';
import { CheckboxApp } from './components/Checkbox';
import { SwitchApp } from './components/Switch';
import { AccordionApp } from './components/Accordion';
import { TabsApp } from './components/Tabs';
import { TagsApp } from './components/Tags';
import { SwitchTagsApp } from './components/SwitchTags';
import { IconButtonApp } from './components/IconButton';
import { PopoverApp } from './components/PopoverApp';
import './index.css';
import { DropdownApp } from './components/Dropdown';
import { BreadcrumbsApp } from './components/Breadcrumbs';
import { PaginationApp } from './components/Pagination';
import { RadioGroupApp } from './components/RadioGroup';
import { ProgressBarApp } from './components/ProgressBar';
import { ModalApp } from './components/Modal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="conatainer">
      {/*<ProgressBarApp/>*/}
      {/* <DropdownApp/> */}
      <br />
      <hr />
      {/* <BreadcrumbsApp/><br/> */}
      {/* <SwitchTagsApp/> */}
      <br />
      <hr />
      {/*<ModalApp /><br /><hr />*/}
      {/* <PopoverApp/><br /><hr />
      <IconButtonApp/>
      <SwitchTagsApp/><br /><hr />
      <TagsApp/><br /><hr />
      <TabsApp/><br /><hr />
      <SwitchApp/><br /><hr />
      <CheckboxApp/><br /><hr />
      <InputApp/><br /><hr />
      <AccordionApp/><br /><hr />
      <ButtonApp/><hr /> */}
      {/*<PaginationApp/>*/}
      {/*<hr/>*/}
      {/*<CheckboxApp/>*/}
        <RadioGroupApp/>
        <hr/>
    </div>
  </React.StrictMode>,
);
