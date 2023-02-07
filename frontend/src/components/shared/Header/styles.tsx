import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 80px;
    background: #FFFFFF;
    border-bottom: 1px solid #E7ECF2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 40px;
    img{
        height: 60px;
    }
    @media (max-width: 768px) {
        img{
            height: 40px;
        }
    }
`