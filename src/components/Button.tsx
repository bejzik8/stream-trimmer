import styled from 'styled-components'

type ButtonProps = {
    text: string
    onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) =>
    <StyledButton onClick={onClick}>{text}</StyledButton>

const StyledButton = styled.button`
    height: 32px;
    border-radius: 4px;
    border: none;
    padding: 8px 10px;
    font-size: 16px;
    font-weight: bold;
    color: black;
    background-color: rgba(133, 208, 128, 0.7);
    cursor: pointer;
    margin-right: 4px;
`

export default Button