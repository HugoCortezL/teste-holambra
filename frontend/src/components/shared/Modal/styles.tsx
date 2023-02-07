import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    width: 60vw;
    height: 85vh;
    background-color: #FFFFFF;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    z-index: 100;
    top: 7.5vh;
    left: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    @media (max-width: 768px) {
        width: 90vw;
        left: 5vw;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #EBEBEB; 
    border-radius: 10px 10px 0px 0px;
    .close{
        position: absolute;
        right: 15px;
        top: 13px;
        cursor: pointer;
    }
`

export const Content = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &::-webkit-scrollbar {
        width: 5px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #3F4955;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #232930;
    }
`

export const Footer = styled.div`
    height: 50px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #EBEBEB; 
    border-radius: 0px 0px 10px 10px;
    padding: 0px 15px;
`