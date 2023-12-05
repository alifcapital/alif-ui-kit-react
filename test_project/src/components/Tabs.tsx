
import { useEffect, useState } from 'react';
import { TABS_SIZE, Tabs} from '../../../src';
import { ITabsProps } from '../../../src/components/Tabs/TabsTypes';

export const TabsApp: React.FC = () => {
  
  type TField  = "one" | "two" | "three";

  const [active, setActive] = useState<TField>("one");


  const tabs: ITabsProps<TField>['tabs'] = [
    {
      id: "one",
      label: 'Label 1',
      onClick: (id) => setActive(id)
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

  useEffect(()=> {
    setActive("three")
  }, [])
        
  return (
    <div>
      <Tabs   activeTab={active} className='custom-class' tabs={tabs}/> <br></br> 
      <Tabs  activeTab={active} activeColor='black' size={ TABS_SIZE.Small} className='custom-class' tabs={tabs}/>
    </div>
  );
};
