
import {RadioGroup, TRadioGroupValue} from "../../../src/components/RadioGroup";

export const RadioGroupApp: React.FC = () => {


  const handleChange = (e:TRadioGroupValue) => {
    console.log(e)
  };

  return (
    <div>
        <RadioGroup  ariaLabel="radio" onChange={handleChange} options={
            [
                {
                    value: "red",
                    key: "1",
                    label: "red"
                },
                {
                    value: "blue",
                    key: "2",
                    label: "blue"
                }
            ]
        } name="name" />
    </div>
  );
};
