interface ISlider {
  id: string;
  name: string;
  disabled: boolean;
  className: string;
}

export interface ISliderProps extends Partial<ISlider> {
  ariaLabel: string;
  onChange: (value: number) => void;
  value: number;
}
