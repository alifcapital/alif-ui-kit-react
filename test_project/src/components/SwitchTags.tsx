import { TAGS_SIZE, SwitchTags} from '../../../src';
import { ISwitchTagsProps} from '../../../src/components/SwitchTags/SwitchTagsTypes';

export const SwitchTagsApp: React.FC = () => {

  const tags: ISwitchTagsProps['tags'] = [
    {
      id: 'transfer',
      label: 'Переводы',
    },
    {
      id: 'cards',
      label: 'Карты',
    },
    {
      id: 'cash',
      label: 'Касса',
    },
    {
      id: 'purchases',
      label: 'Покупки',
    },
  ];
        
  return (
    <div>
      <SwitchTags activeTag='cash' activeColor='black'  className='custom-class' size={ TAGS_SIZE.Large} tags={tags}/> <br/> 
      <SwitchTags   size={ TAGS_SIZE.Medium} className='custom-class' tags={tags}/>
    </div>
  );
};
