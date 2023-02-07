import styled from "styled-components";

export const ProspectsTableContentContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: auto;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8rem;
    tr{
        th, td {
            padding: 10px 20px;
            text-align: left;
        }
        td{
            font-size: 0.9rem;
            padding: 15px 20px;
            cursor: default;
            button.button-icon{
                background-color: transparent;
                border: none;
                cursor: pointer;
                &:hover{
                    color: orange;
                }
                &:first-child {
                    margin-right: 10px;
                    &:hover{
                        color: red;
                    }
                }
            }
            &.row-options{
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        td.name {
            font-weight: bold;
        }
        &:hover {
            background-color: #efefef;
        }
    } 
    tr:nth-child(even) {
        background-color: #F9FAFC;
        &:hover {
            background-color: #efefef;
        }
    }
`
