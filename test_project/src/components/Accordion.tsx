
import { useEffect, useRef, useState } from 'react';
import {  Accordion} from '../../../src';

export const AccordionApp: React.FC = () => {
  const content= ` What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s`;

      const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);

  const handleChange = () => setState(!state)

  return (
    <div>
      <Accordion 
        ref={ref} 
        ariaLabel='acorrdion label' color='grey'  
        content={<>
          <div>{content}</div>
          <div>{content}</div>
        </>} header="Карты"  className='custom-class' /> 
      <Accordion onChange={handleChange} isOpen={state} ariaLabel='acorrdion label 2'  content={content} header="Карты 2222"  className='custom-class' /> 
    </div>
  );
};
