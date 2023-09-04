import React from "react";
import {Container} from "./CustomButton.styled";

interface CustomButtonProps {
    text: string;
    onClick: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({onClick, text}) => {
    return <Container onClick={onClick}>{text}</Container>
}