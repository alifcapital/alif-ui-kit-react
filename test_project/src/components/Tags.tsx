
import { useState } from 'react';
import { TAGS_SIZE, Tags} from '../../../src';
import { ITagsProps } from '../../../src/components/Tags/TagsTypes';

export const TagsApp: React.FC = () => {
  
  type TField  = "transfer" | "cards" | "cash" | "purchases";

  const [active, setActive] = useState<TField>("cards");

  const tags: ITagsProps<TField>['tags'] = [
    {
      id: 'transfer',
      label: 'Переводы',
      onClick: (id) => setActive(id)
    },
    {
      id: 'cards',
      label: 'Карты',
    },
    {
      id: 'cash',
      label: 'Касса',
      content: <h5>Hello there</h5>
    },
    {
      id: 'purchases',
      label: 'Покупки',
    },
  ];
        
  return (
    <div>
      <Tags  activeTag={active} size={ TAGS_SIZE.Medium} className='custom-class' tags={tags}/><br></br> 
      <Tags  activeColor='black'  className='custom-class' size={ TAGS_SIZE.Large} tags={tags}/> 
    </div>
  );
};
