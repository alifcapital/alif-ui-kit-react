import { SWITCH_TAGS_SIZE, SWITCH_TAGS_VARIANT, SwitchTags} from '../../../src';
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
      content: <h5>Hello there</h5>
    },
    {
      id: 'purchases',
      label: 'Покупки',
    },
  ];
        
  return (
    <div>
      <SwitchTags activeTag='cash' activeColor='black'  className='custom-class' size={ SWITCH_TAGS_SIZE.Large} tags={tags}/> <br/> 
      <SwitchTags varinat={SWITCH_TAGS_VARIANT.Square}  size={ SWITCH_TAGS_SIZE.Medium} className='custom-class' tags={tags}/>
    </div>
  );
};
