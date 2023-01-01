import { Link, Navbar, Text, User } from "@nextui-org/react"
import { loadAuth, storeAuth } from '../../storage/auth.storage'
import { useNavigate } from "react-router-dom"
import { LogOut } from "lucide-react"
import Icon from "./Icon"

export default () => {

    const auth = loadAuth()
    const navigate = useNavigate()

    const logOut = () => {
        storeAuth(null)
        navigate('/login')
    }

    return (
        <Navbar variant='sticky' isBordered>
            <Navbar.Brand>
                <Text b> DATA Lab </Text>
            </Navbar.Brand>

            <Navbar.Content>
            </Navbar.Content>

            <Navbar.Content>
                <Navbar.Item> 
                    <User
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        name={auth?.user.name}>
                        <User.Link href="https://nextui.org/">@{auth?.user.username}</User.Link>
                    </User>
                </Navbar.Item>
                <Navbar.Item>
                    <Link onClick={logOut}>
                        <Icon name="LogOut"/>
                         Logout 
                    </Link>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}