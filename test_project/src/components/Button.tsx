import { Button, ButtonColor, ButtonSize, ButtonVariant } from '../../../src';

export const ButtonApp: React.FC = () => {
  const ArrowRight = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M10.7071 1.29292L10 0.585815L8.58579 2.00003L9.29289 2.70714L14.5858 8.00003L1 8.00003H0V10H1L14.5858 10L9.29289 15.2929L8.58579 16L10 17.4142L10.7071 16.7071L17.7071 9.70714C18.0976 9.31661 18.0976 8.68345 17.7071 8.29292L10.7071 1.29292Z" fill="white"/>
  </svg>;
  
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
      <Button  ariaLabel='Button' endIcon={<ArrowRight />}>Кнопка</Button>
      <br/> <br/>
      With Icon 
      <Button  ariaLabel='Button'withIcon >
        <ArrowRight />
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
      <Button  ariaLabel='Button'  withIcon size={ButtonSize.large} ><ArrowRight /></Button>
      <br/><br/>
       With Icon medium
      <Button  ariaLabel='Button'withIcon ><ArrowRight /></Button>
      <br/><br/>
       With Icon small
      <Button  ariaLabel='Button'  withIcon size={ButtonSize.Small} ><ArrowRight /></Button>
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