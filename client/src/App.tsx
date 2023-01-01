import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Login from './ui/pages/auth/Login'
import Register from './ui/pages/auth/Register'
import LectureList from './ui/pages/lectures/LectureList'

import ProtectedRoute from './ui/containers/ProtectedRoute'

import NotFound from './ui/pages/NotFound'
import ReadLecture from './ui/pages/lectures/ReadLecture'
import TaskScreen from './ui/pages/tasks/TaskScreen'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate to="/lectures" />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/lectures'>
                    <Route index element={
                        <ProtectedRoute element={<LectureList />} />
                    } />
                    <Route path='/lectures/:id' element={<ReadLecture />} />
                    <Route path='/lectures/:id/tasks' element={<TaskScreen />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
