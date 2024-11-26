import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import Posts from './pages/Posts'
import RootLayout from './pages/RootLayout'

const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/posts',
                element: <Posts/>
            }
        ]
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>
}

export default App;
