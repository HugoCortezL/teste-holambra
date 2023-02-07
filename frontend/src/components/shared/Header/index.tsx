import { HeaderContainer } from './styles'
import logo from '../../../assets/holambra-logo.svg'
export default function Header() {

    return (
        <HeaderContainer>
            <img src={logo} alt="Holambra logo" />
        </HeaderContainer>
    )
}
