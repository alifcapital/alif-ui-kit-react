import { Search } from 'alif-icon-kit-react';

import { Button, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT } from '../../../src';


export const ButtonApp: React.FC = () => {
  return (
    <div>
       Medium 
      <Button  ariaLabel='Button' >Кнопка</Button>
      <br /> <br /> 
      Small 
      <Button  ariaLabel='Button'  size={BUTTON_SIZE.Small}>Кнопка</Button>
      <br /> <br /> 
      Large
      <Button  ariaLabel='Button' size={BUTTON_SIZE.large}>Кнопка</Button>
      <br/> <br/>
      Disabled
      <Button  ariaLabel='Button' disabled>Кнопка</Button>
      <br/> <br/>
      Rounded
      <Button  ariaLabel='Button' rounded>Кнопка</Button>
      <br/><br/>
       Button With Icon right
      <Button  ariaLabel='Button' endIcon={<Search />}>Кнопка</Button>
      <br/> <br/>
       Button Small With Icon right
      <Button  ariaLabel='Button' size={BUTTON_SIZE.Small} endIcon={<Search />}>Кнопка</Button>
      <br/> <br/>
      With Icon 
      <Button  ariaLabel='Button'withIcon >
        <Search />
      </Button>
      <br/><br/>
      Variant Outlined
      <Button  ariaLabel='Button' variant={BUTTON_VARIANT.Outlined} size={BUTTON_SIZE.large} >Кнопка</Button>
      <br/><br/>
      Variant Outlined Disabled
      <Button  ariaLabel='Button'  variant={BUTTON_VARIANT.Outlined} size={BUTTON_SIZE.Small} disabled >Кнопка</Button>
      <br/><br/>
       Variant Text 
      <Button  ariaLabel='Button'  variant={BUTTON_VARIANT.Text}  >Кнопка</Button>
      <br/><br/>
       Variant Text disabled
      <Button  ariaLabel='Button'  variant={BUTTON_VARIANT.Text}  disabled >Кнопка</Button>
      <br/><br/>
       With Icon large
      <Button  ariaLabel='Button'  withIcon size={BUTTON_SIZE.large} ><Search /></Button>
      <br/><br/>
       With Icon medium
      <Button  ariaLabel='Button'withIcon ><Search /></Button>
      <br/><br/>
       With Icon small
      <Button  ariaLabel='Button'  withIcon size={BUTTON_SIZE.Small} ><Search /></Button>
      <br/><br/>
      Secondary large
      <Button  ariaLabel='Button'  color={BUTTON_COLOR.Secondary} size={BUTTON_SIZE.large}>Кнопка</Button>
      <br/> <br/>
      Secondary disabled
      <Button  ariaLabel='Button'  color={BUTTON_COLOR.Secondary}   disabled >Кнопка</Button>
      <br/><br/>
      Green large
      <Button  ariaLabel='Button'  color={BUTTON_COLOR.Green} size={BUTTON_SIZE.large}>Кнопка</Button>
      <br/> <br/>
      Green disabled
      <Button  ariaLabel='Button'  color={BUTTON_COLOR.Green}   disabled >Кнопка</Button>
      <br/><br/>
    </div>
  );
};