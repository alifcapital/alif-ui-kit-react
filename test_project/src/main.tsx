import React from 'react';
import ReactDOM from 'react-dom/client';

import { Button, ButtonColor, ButtonSize, ButtonVariant, Text } from '../../src';
import ArrowRight from './ArrowRight.svg';
import './index.css';


const TextApp: React.FC = () => {
  return (
    <div>
      <Text>Text Default</Text>
      <br />
      <Text bold>Text Bold</Text>
      <br />
      <Text underline>Text Underline</Text>
      <br />
      <Text uppercase>Text Uppercase</Text>
    </div>
  );
};

const ButtonApp: React.FC = () => {
  return (
    <div>
       Medium 
      <Button >Кнопка</Button>
      <br /> <br /> 
      Small 
      <Button   size={ButtonSize.Small}>Кнопка</Button>
      <br /> <br /> 
      Large
      <Button  size={ButtonSize.large}>Кнопка</Button>
      <br/> <br/>
      Disabled
      <Button  disabled>Кнопка</Button>
      <br/> <br/>
      Rounded
      <Button rounded>Кнопка</Button>
      <br/><br/>
       Button With Icon right
      <Button  endIcon={<ArrowRight />}>Кнопка</Button>
      <br/> <br/>
      With Icon 
      <Button withIcon >
        <ArrowRight />
      </Button>
      <br/><br/>
      Variant Outlined
      <Button  variant={ButtonVariant.Outlined} size={ButtonSize.large} >Кнопка</Button>
      <br/><br/>
      Variant Outlined Disabled
      <Button   variant={ButtonVariant.Outlined} size={ButtonSize.Small} disabled >Кнопка</Button>
      <br/><br/>
       Variant Text 
      <Button   variant={ButtonVariant.Text}  >Кнопка</Button>
      <br/><br/>
       Variant Text disabled
      <Button   variant={ButtonVariant.Text}  disabled >Кнопка</Button>
      <br/><br/>
       With Icon large
      <Button   withIcon size={ButtonSize.large} ><ArrowRight /></Button>
      <br/><br/>
       With Icon medium
      <Button withIcon ><ArrowRight /></Button>
      <br/><br/>
       With Icon small
      <Button   withIcon size={ButtonSize.Small} ><ArrowRight /></Button>
      <br/><br/>
      Secondary large
      <Button   color={ButtonColor.Secondary} size={ButtonSize.large}>Кнопка</Button>
      <br/> <br/>
      Secondary disabled
      <Button   color={ButtonColor.Secondary}   disabled >Кнопка</Button>
      <br/><br/>
      Green large
      <Button   color={ButtonColor.Green} size={ButtonSize.large}>Кнопка</Button>
      <br/> <br/>
      Green disabled
      <Button   color={ButtonColor.Green}   disabled >Кнопка</Button>
      <br/><br/>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='conatainer'>
      <TextApp />
      <hr />
      <ButtonApp/>
    </div>
  </React.StrictMode>,
);
