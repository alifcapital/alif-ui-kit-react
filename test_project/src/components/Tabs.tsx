
import { TABS_SIZE, Tabs} from '../../../src';
import { ITabsProps } from '../../../src/components/Tabs/TabsTypes';

export const TabsApp: React.FC = () => {

  const tabs: ITabsProps['tabs'] = [
    {
      id: 'one',
      label: 'Label 1',
    },
    {
      id: 'two',
      label: 'Label 2',
      content: <a href="#"> Click me</a>,
    },
    {
      id: 'three',
      label: 'Label 3',
    },
  ];
        
  return (
    <div>
      <Tabs   className='custom-class' tabs={tabs}/> <br></br> 
      <Tabs  activeTab='three' size={ TABS_SIZE.Small} className='custom-class' tabs={tabs}/>
    </div>
  );
};
