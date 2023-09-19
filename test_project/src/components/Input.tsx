import {CheckCircle} from 'alif-icon-kit-react';
import {Input, INPUT_SIZE, INPUT_THEME, INPUT_TYPE} from '../../../src';
import { useRef } from 'react';

export const InputApp: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null);

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
                helperText={<><CheckCircle/> Ошибочка вышла</>}
            />
            <br/><br/>
            <form>
                <Input
                    ref={ref}
                    size={INPUT_SIZE.Small}
                    endIcon={<CheckCircle/>}
                    type={INPUT_TYPE.Password}
                    placeholder='Однострочный'
                    name="phone"
                    ariaLabel='araiaLabel'
                />
            </form>

            <Input
                size={INPUT_SIZE.Small}
                type={INPUT_TYPE.Number}
                placeholder='Однострочный'
                name="number"
                ariaLabel='araiaLabel'
            />

            <Input
                size={INPUT_SIZE.Small}
                type={INPUT_TYPE.Telephone}
                placeholder='Однострочный'
                name="phone"
                ariaLabel='araiaLabel'
            />
            <Input
                size={INPUT_SIZE.Small}
                type={INPUT_TYPE.Email}
                placeholder='email'
                name='emil'
                ariaLabel='araiaLabel'
            />
        </div>
    );
};
