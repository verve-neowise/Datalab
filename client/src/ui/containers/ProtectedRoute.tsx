import { loadAuth } from "../../storage/auth.storage"
import { Navigate, Outlet } from "react-router-dom"

type Props = {
    requireAdmin?: boolean
    redirectTo?: string
    element: JSX.Element | null
}

export default ({ requireAdmin = false, redirectTo = '/login', element }: Props) => {
    const auth = loadAuth()

    if (!auth) {
        return <Navigate to={redirectTo}/>
    }
    else {
        if (requireAdmin && !auth.user.isAdmin) {
            return <Navigate to={redirectTo}/>
        }
        return element ? element : <Outlet/>
    }
}
