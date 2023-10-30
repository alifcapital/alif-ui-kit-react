import { Search } from 'alif-icon-kit-react';
import { Dropdown, IDropdownListItem } from '../../../src';
import { useRef, useState } from 'react';
import { DROPDOWN_SIZE, DROPDOWN_TYPE } from '../../../src/components/Dropdown/DropdownConstants';


export const DropdownApp: React.FC = () => {
  const items: IDropdownListItem[] = [
    {
      label: 'TJS',
      value: 'tjs',
    },
    {
      label: 'USD',
      value: 'usd',
    },
    {
      label: 'RUB',
      value: 'rub',
    },
  ];

  const [selectedItem, setSeletedItem] = useState<IDropdownListItem>(items[0]);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Dropdown  type={DROPDOWN_TYPE.Default}  items={items} label='Текст сверху'  ref={ref} selected={selectedItem} onChange={(item) => setSeletedItem(item)}  ariaLabel='icon button' />
      <br /> <br />
      <Dropdown  
        type={DROPDOWN_TYPE.Custom} 
        size={DROPDOWN_SIZE.Small}
        customActiveIcon={ <Search color='red'/>} 
        renderItem={(item)=> <div>{item.label}</div>} 
        renderSelectedValue={(item)=>(
          <div style={{width: '100%', display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{display: 'flex', flexDirection:"column", gap:'4px'}}>
              <div>Увас есть</div>
              <div>1000</div>
            </div>
            <div style={{display:"flex", gap:"4px", fontSize: 16, fontWeight:"bold"}}>
            {item?.label}
            </div>
          </div>
        )}
        items={items}
        ariaLabel='icon button' />
      <br /> <br />
    </div>
  );
};