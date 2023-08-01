import { Button, ButtonColor, ButtonSize, ButtonVariant } from '../../../src';

import { Search } from 'alif-icon-kit-react';

export const ButtonApp: React.FC = () => {
  return (
    <div>
       Medium 
      <Button  ariaLabel='Button' >Кнопка</Button>
      <br /> <br /> 
      Small 
      <Button  ariaLabel='Button'  size={ButtonSize.Small}>Кнопка</Button>
      <br /> <br /> 
      Large
      <Button  ariaLabel='Button' size={ButtonSize.large}>Кнопка</Button>
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
      With Icon 
      <Button  ariaLabel='Button'withIcon >
        <Search />
      </Button>
      <br/><br/>
      Variant Outlined
      <Button  ariaLabel='Button' variant={ButtonVariant.Outlined} size={ButtonSize.large} >Кнопка</Button>
      <br/><br/>
      Variant Outlined Disabled
      <Button  ariaLabel='Button'  variant={ButtonVariant.Outlined} size={ButtonSize.Small} disabled >Кнопка</Button>
      <br/><br/>
       Variant Text 
      <Button  ariaLabel='Button'  variant={ButtonVariant.Text}  >Кнопка</Button>
      <br/><br/>
       Variant Text disabled
      <Button  ariaLabel='Button'  variant={ButtonVariant.Text}  disabled >Кнопка</Button>
      <br/><br/>
       With Icon large
      <Button  ariaLabel='Button'  withIcon size={ButtonSize.large} ><Search /></Button>
      <br/><br/>
       With Icon medium
      <Button  ariaLabel='Button'withIcon ><Search /></Button>
      <br/><br/>
       With Icon small
      <Button  ariaLabel='Button'  withIcon size={ButtonSize.Small} ><Search /></Button>
      <br/><br/>
      Secondary large
      <Button  ariaLabel='Button'  color={ButtonColor.Secondary} size={ButtonSize.large}>Кнопка</Button>
      <br/> <br/>
      Secondary disabled
      <Button  ariaLabel='Button'  color={ButtonColor.Secondary}   disabled >Кнопка</Button>
      <br/><br/>
      Green large
      <Button  ariaLabel='Button'  color={ButtonColor.Green} size={ButtonSize.large}>Кнопка</Button>
      <br/> <br/>
      Green disabled
      <Button  ariaLabel='Button'  color={ButtonColor.Green}   disabled >Кнопка</Button>
      <br/><br/>
    </div>
  );
};