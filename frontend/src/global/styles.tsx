import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 15px;
        font-family: 'Open sans';
        color: #3F4955;
        background-color: #FDFDFD;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
        overflow-x: hidden;
    }

    button.primary-button {
        background-color: #003262;
        color: #FFFFFF;
        border-radius: 5px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding: 0px 20px;
        font: inherit;
        cursor: pointer;
        span.icon{
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
        &:hover{
            background-color: #002548;
        }
    }
    
    button.secundary-button {
        background-color: transparent;
        color: #003262;
        border-radius: 5px;
        border: 1px solid #003262;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding: 0px 20px;
        font: inherit;
        cursor: pointer;
        span.icon{
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &:hover{
            box-shadow: 1px 1px 5px #003262;
        }
    }

    @media (max-width: 768px) {
        button.primary-button, 
        button.secundary-button {
            padding: 0px 15px;
            span.icon {
                margin-right: 0px;
            }
        }
        
    }

    button.ternary-button {
        background-color: transparent;
        color: #3F4955;
        border-radius: 5px;
        border: 1px solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding: 0px 20px;
        font: inherit;
        cursor: pointer;
        span.icon{
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &:hover{
            border: 1px solid #3F4955;
        }
    }

    div.input-group{
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        input{
            background-color: #FFFFFF;
            height: 45px;
            border: 1px solid #B2B4BD;
            padding: 0px 15px;
            margin-top: 5px;
            border-radius: 5px; 
            &.wrong{
                border: 1px solid red;
            }
        }
        &.mg-10{
            margin-left: 10px;
        }
    }
    ::placeholder { 
        color: #B2B4BD;
        opacity: 1; 
    }

    :-ms-input-placeholder { 
        color: #B2B4BD;
    }

    ::-ms-input-placeholder { 
        color: #B2B4BD;
    }

    span.form-divisor{
        width: 100%;
        border: 1px solid #EBEBEB;
    }
    @media (max-width: 768px) {
        *.hide-on-phone{
            display: none;
        }
    }
`