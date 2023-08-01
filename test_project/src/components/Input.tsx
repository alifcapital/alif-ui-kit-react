
import { CheckCircle } from 'alif-icon-kit-react';
import { Input, InputSize, InputTheme, InputType } from '../../../src';

export const InputApp: React.FC = () =>  {
  return (
    <div>
        <Input  
          isError
          type={InputType.Text}
          endIcon={<CheckCircle/>}
          placeholder='Однострочный'
          theme={InputTheme.Dark}
          label="Текст сверху"
          name="name"
          ariaLabel='araiaLabel'
          helperText={<><CheckCircle  /> Ошибочка вышла</>}
        />
        <br /><br />
        <Input  
          defaultValue="default"
          size={InputSize.Small}
          endIcon={<CheckCircle/>}
          type={InputType.Password}
          placeholder='Текст'
          name="phone"
          ariaLabel='araiaLabel'
        />
    </div>
  );
};
