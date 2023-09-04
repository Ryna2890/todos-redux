import React, {useState} from "react";
import {InputBase} from "./Input.styled";

interface InputProps {
    onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({onChange}) => {
    const [value, setValue] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            onChange(value);
            setValue('');
        }
    }

    return (
        <InputBase
            placeholder="Set text"
            value={value}
            type="text"
            onChange={handleChange}
            onKeyDown={onKeyDown}
        />
    );
};
export default Input;