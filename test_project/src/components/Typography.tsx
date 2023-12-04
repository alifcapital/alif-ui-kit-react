import { Search } from 'alif-icon-kit-react';

import { useRef } from 'react';
import { TYPOGRAPHY_VARIANT, Typography } from '../../../src';


export const TypographyApp: React.FC = () => {
const ref = useRef<HTMLDivElement>(null);

const handleClick = () => {
    if(ref.current) {
      ref.current.style.color = 'red';
    }
  };

return (
<div>   
<Typography onClick={handleClick} variant='display-1'>Display 1</Typography>
<Typography variant='display-2'>Display 2</Typography>
<Typography variant='heading-1'>Heading 1</Typography>
<Typography variant='heading-2'>Heading 2</Typography>
<Typography variant='heading-2-medium'>Heading 2 Medium</Typography>
<Typography variant='heading-3'>Heading 3</Typography>
<Typography variant='heading-3-medium'>Heading 3 Medium</Typography>
<Typography variant='heading-regular'>Heading Regular</Typography>
<Typography variant='heading-subtitle'>Heading Subtitle</Typography>
<Typography variant='heading-subtitle-medium'>Heading Subtitle Medium</Typography>
<Typography variant='heading-small'>Heading Small</Typography>
<Typography variant='body-big'>Body Big</Typography>
<Typography variant='body-normal'>Body Normal</Typography>
<Typography variant='body-paragraph'>Body Paragraph</Typography>
<Typography variant='body-small'>Body Small</Typography>
<Typography variant='all-captions'>All Captions</Typography>
<Typography ref={ref} variant='caption'>Caption</Typography>

</div>
);
};