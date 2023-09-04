import React from "react";
import {Container} from "./CustomCheckbox.styled";

interface CustomCheckboxProps {
    isChecked: boolean;
    onChange: () => void;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isChecked, onChange }) => {
    return (
        <Container
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
        ></Container>
    );
};
export default CustomCheckbox;