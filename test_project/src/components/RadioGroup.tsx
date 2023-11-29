
import {RADIO_GROUP_THEME, RadioGroup, TRadioGroupValue} from "../../../src/components/RadioGroup";
import {useState} from "react";

export const RadioGroupApp: React.FC = () => {
    const [isError,setIsError] = useState(false);
    const [value,setValue] = useState<TRadioGroupValue>("red")
  const handleChange = (e:TRadioGroupValue) => {
        setIsError(false)
        setValue(e);
        setTimeout(()=>{setIsError(true)},300)
  };

  return (
    <div>
        <hr/>
        without error
        <RadioGroup  ariaLabel="radio"  value={value} onChange={handleChange} options={
            [
                {
                    value: "red1",
                    key: "1",
                    label: "red",
                },
                {
                    value: "blue1",
                    key: "2",
                    label: "blue",
                }
            ]
        } name="name" />
        <hr/>
        with error
        <RadioGroup  ariaLabel="radio" error={isError} value={value} onChange={handleChange} options={
            [
                {
                    value: "red",
                    key: "1",
                    label: "red",
                },
                {
                    value: "blue",
                    key: "2",
                    label: "blue",
                }
            ]
        } name="name2" />
    </div>
  );
};
