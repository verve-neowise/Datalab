import { findUserByToken } from "../services/user.service";

import { 
    requireAuth as commonRequireAuth, 
    requireAdmin as commonRequireAdmin,  
    UserDetailsProvider
} from '../../common/middlewares/authorization'

const provideUser: UserDetailsProvider = (token: string) => findUserByToken(token)

export const requireAuth = () => commonRequireAuth(provideUser)

export const requireAdmin = () => commonRequireAdmin(provideUser)