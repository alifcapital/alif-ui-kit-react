
import {RADIO_GROUP_THEME, RadioGroup, TRadioGroupValue} from "../../../src/components/RadioGroup";

export const RadioGroupApp: React.FC = () => {


  const handleChange = (e:TRadioGroupValue) => {
    console.log(e)
  };

  return (
    <div>
        <RadioGroup  ariaLabel="radio" theme={RADIO_GROUP_THEME.Dark} onChange={handleChange} options={
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
                    error: true
                }
            ]
        } name="name" />
        <hr/>
        <RadioGroup  ariaLabel="radio" onChange={handleChange} options={
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
                    error: true
                }
            ]
        } name="name2" />
    </div>
  );
};
