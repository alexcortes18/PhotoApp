import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'

import Error from './pages/Error'
import Posts from './pages/Posts'
// import RootLayout from './pages/RootLayout'
import PostDetails from './pages/PostDetails'

const router = createBrowserRouter([
    {
        path: '/',
        // element: <RootLayout />,
        element: <Navigate to="/posts"></Navigate>,
        errorElement: <Error />,
    },
    {

        path: '/posts',
        element: <Posts />,
    },
    {
        path: '/posts/:id',
        element: <PostDetails />
    }
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>
}

export default App;
