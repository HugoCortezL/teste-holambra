import styled from "styled-components";

export const ProspectsTableContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #E7ECF2;
    border-radius: 8px;
`

export const Header = styled.div`
    background: #FFFFFF;
    border: 1px solid #E7ECF2;
    border-radius: 8px 8px 0px 0px;
    width: 100%;
    height: 70px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div.buttons-options{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
`

export const TableContent = styled.div`
    width: 100%;
    height: calc(100% - 140px);
`

export const Footer = styled.div`
    width: 100%;
    height: 70px;
    border: 1px solid #E7ECF2;
    border-radius: 0px 0px 8px 8px;
`