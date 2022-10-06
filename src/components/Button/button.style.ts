import styled from "styled-components";

export interface ButtonProps {
    children: React.ReactNode;
    theme?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: string;
}

const StyButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 4px;
    min-width: 127px;
    max-height: 14px;
    padding: 20px;
    font-size: 15px;
    font-weight: 600;
    margin: 10px;
    transition: all .2s ease;
    user-select: none;
    cursor: pointer;
    pointer-events: ${ ({disabled}) => disabled === true ? 'none' : 'all' };
    
    svg {
        height: 20px;
    }
`

export const StyPrimaryButton = styled(StyButton)`
    background-color: ${ ({theme}) => theme === 'danger' ? '#DA262C' : '#1F97AE' };
    background-color: ${ ({disabled}) => disabled === true && '#C4C4C4' };
    color: white;
    border: 2px solid ${ ({theme}) => theme === 'danger' ? '#DA262C' : '#1F97AE' };
    border-color: ${ ({disabled}) => disabled === true && '#C4C4C4' };

    &:hover {
        background-color: ${ ({theme}) => theme === 'danger' ? '#B7202E' : '#006F86' };
        border-color: ${ ({theme}) => theme === 'danger' ? '#B7202E' : '#006F86' };
    }
    
    &:active {
        border-color: ${ ({theme}) => theme === 'danger' ? '#DF8588' : '#81BDC9' };
        outline: 2px solid ${ ({theme}) => theme === 'danger' ? '#DF8588' : '#81BDC9' };
    }
`

export const StySecondaryButton = styled(StyButton)`
    background-color: white;
    border: 1px solid ${ ({theme}) => theme === 'danger' ? '#DA262C' : '#1F97AE' };
    border-color: ${ ({disabled}) => disabled === true && '#C4C4C4' };
    color: ${ ({theme}) => theme === 'danger' ? '#DA262C' : '#1F97AE' };
    color: ${ ({disabled}) => disabled === true && '#C4C4C4' };

    &:hover {
        background-color: ${ ({theme}) => theme === 'danger' ? '#DA262C' : '#1F97AE' };
        color: white;
    }
    
    &:active {
        border-color: ${ ({theme}) => theme === 'danger' ? '#DF8588' : '#81BDC9' };
        outline: 2px solid ${ ({theme}) => theme === 'danger' ? '#DF8588' : '#81BDC9' };
    }
`

export const StyLinkButton = styled(StyButton)`
    background-color: transparent;
    border: none;
    color: ${ ({theme}) => theme === 'danger' ? '#DA262C' : '#1F97AE' };
    color: ${ ({disabled}) => disabled === true && '#C4C4C4' };

    &:hover {
        color: ${ ({theme}) => theme === 'danger' ? '#B7202E' : '#006F86' };
    }
    
    &:active {
        color: ${ ({theme}) => theme === 'danger' ? '#DA262C' : '#1F97AE' };
        background-color: #f1f1f1;
    }
`