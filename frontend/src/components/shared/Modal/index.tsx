import { ModalContainer, Header, Footer, Content } from "./styles";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { ReactNode } from "react";

interface ModalProps {
    title: string
    onCancel: () => void
    onConfirm: () => void
    confirmText: string
    children: ReactNode
}

export default function Modal(props: ModalProps) {
    return (
        <ModalContainer>
            <Header>
                {props.title}
                <span className="close" onClick={props.onCancel}>
                    <AiOutlineCloseCircle size={20} />
                </span>
            </Header>
            <Content>
                {props.children}
            </Content>
            <Footer>
                <button className="ternary-button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className="primary-button" onClick={props.onConfirm}>
                    {props.confirmText}
                </button>
            </Footer>
        </ModalContainer>
    )
}