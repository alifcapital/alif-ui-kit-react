
import { CheckCircle } from 'alif-icon-kit-react';
import { Input, INPUT_SIZE,INPUT_THEME,INPUT_TYPE} from '../../../src';

export const InputApp: React.FC = () =>  {
  return (
    <div>
        <Input  
          isError
          disabled
          type={INPUT_TYPE.Text}
          endIcon={<CheckCircle/>}
          placeholder='Однострочный'
          theme={INPUT_THEME.Dark}
          label="Текст сверху"
          name="name"
          ariaLabel='araiaLabel'
          helperText={<><CheckCircle  /> Ошибочка вышла</>}
        />
        <br /><br />
        <Input  
          defaultValue="default"
          size={INPUT_SIZE.Small}
          endIcon={<CheckCircle/>}
          type={INPUT_TYPE.Password}
          placeholder='Однострочный'
          name="phone"
          ariaLabel='araiaLabel'
        />

        <Input  
          defaultValue="default"
          size={INPUT_SIZE.Small}
          type={INPUT_TYPE.Telephone}
          placeholder='Однострочный'
          name="phone"
          ariaLabel='araiaLabel'
        />
    </div>
  );
};
