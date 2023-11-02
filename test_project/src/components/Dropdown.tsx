import { Search } from 'alif-icon-kit-react';
import { Dropdown, IDropdownListItem } from '../../../src';
import { useRef, useState } from 'react';
import { DROPDOWN_SIZE, DROPDOWN_TYPE } from '../../../src/components/Dropdown/DropdownConstants';

type TCustomDropdown = IDropdownListItem & { img: React.ReactNode};

export const DropdownApp: React.FC = () => {
  const itemsDefault: IDropdownListItem[] = [
    {
      id:'1',
      label: 'TJS',
      value: 'tjs',
    },
    {
      id:'2',
      label: 'USD',
      value: 'usd',
    },
    {
      id:'3',
      label: 'RUB',
      value: 'rub',
    },
  ];

  const itemsCustom: TCustomDropdown[] = [
    {
      id:'1',
      label: 'TJS',
      value: 'tjs',
      img:<Search color='red'/>,
    },
    {
      id:'2',
      label: 'USD',
      value: 'usd',
      img:<Search color='green'/>
    },
  ];

  const [selectedItem, setSeletedItem] = useState<IDropdownListItem>(itemsDefault[0]);
  const [selectedCustomItem, setSeletedCustomItem] = useState<TCustomDropdown>(itemsCustom[0]);
  const ref = useRef<HTMLInputElement>(null);
  
  return (
    <div>
   
      <div style={{
        maxWidth: '600px',
      }}>
        <Dropdown  
          type={DROPDOWN_TYPE.Default}
          items={itemsDefault}
          label='Текст сверху'
          ref={ref}
          selected={selectedItem}
          onChange={(item) => setSeletedItem(item)}
          ariaLabel='icon button' 
        />
      </div>
      <br /> <br />
      <Dropdown<TCustomDropdown>
        type={DROPDOWN_TYPE.Custom} 
        size={DROPDOWN_SIZE.Small}
        selected={selectedCustomItem}
        onChange={(item) => setSeletedCustomItem(item)}
        // customActiveIcon={ <Search color='red'/>} 
        renderItem={(item)=> <div>{item.label} {item.img}</div>} 
        renderSelectedValue={(item)=>(
          <div style={{width: '100%', display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{display: 'flex', flexDirection:"column", gap:'4px'}}>
              <div>Увас есть</div>
              <div>1000</div>
            </div>
            <div style={{display:"flex", gap:"4px", fontSize: 16, fontWeight:"bold"}}>
            {item?.label}
            {item?.img}
            </div>
          </div>
        )}
        items={itemsCustom}
        ariaLabel='icon button' />
      <br /> <br />
    </div>
  );
};