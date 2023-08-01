
import { CheckCircle, EyeOff } from 'alif-icon-kit-react';
import { Input, InputSize, InputTheme, InputType } from '../../../src';


export const InputApp: React.FC = () =>  {
  return (
    <div>
        <Input  
          hint 
          type={InputType.Text}
          endIcon={<CheckCircle/>}
          placeholder='Однострочный'
          theme={InputTheme.Dark}
          label="Текст сверху"
          name="name"
          ariaLabel='araiaLabel'
          helperText={<><CheckCircle />Ошибочка вышла</>}
        />
        <br /><br />
        <Input  
          size={InputSize.Small}
          endIcon={<EyeOff/>}
          type={InputType.Text}
          placeholder='Текст'
          name="phone"
          ariaLabel='araiaLabel'
        />
    </div>
  );
};
