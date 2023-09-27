import { useState } from 'react';
import { SWITCH_TAGS_SIZE, SWITCH_TAGS_VARIANT, SwitchTags} from '../../../src';
import { ISwitchTagsProps} from '../../../src/components/SwitchTags/SwitchTagsTypes';

export const SwitchTagsApp: React.FC = () => {

  type TField  = "transfer" | "cards" | "cash" | "purchases";

  const [active, setActive] = useState<TField>("cards");

  const tags: ISwitchTagsProps<TField>['tags'] = [
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
      <SwitchTags activeTag={active} activeColor='black'  className='custom-class' size={ SWITCH_TAGS_SIZE.Large} tags={tags}/> <br/> 
      <SwitchTags variant={SWITCH_TAGS_VARIANT.Square}  size={ SWITCH_TAGS_SIZE.Medium} className='custom-class' tags={tags}/>
    </div>
  );
};
