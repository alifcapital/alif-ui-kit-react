
import { TAGS_SIZE, Tags} from '../../../src';
import { ITagsProps } from '../../../src/components/Tags/TagsTypes';

export const TagsApp: React.FC = () => {

  const tags: ITagsProps['tags'] = [
    {
      id: 'one',
      label: 'Переводы',
    },
    {
      id: 'two',
      label: 'Карты',
      content: <a href="#"> Click me</a>,
    },
    {
      id: 'three',
      label: 'Касса',
    },
  ];
        
  return (
    <div>
      <Tags  activeTag='three' size={ TAGS_SIZE.Medium} className='custom-class' tags={tags}/><br></br> 
      <Tags  activeColor='black'  className='custom-class' size={ TAGS_SIZE.Large} tags={tags}/> 
    </div>
  );
};
