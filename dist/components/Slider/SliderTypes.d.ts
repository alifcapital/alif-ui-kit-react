interface ISlider {
    id: string;
    name: string;
    disabled: boolean;
    onChange: (value: number) => void;
    value: number;
    className: string;
}
export interface ISliderProps extends Partial<ISlider> {
    ariaLabel: string;
}
export {};
