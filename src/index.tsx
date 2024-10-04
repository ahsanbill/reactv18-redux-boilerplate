import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import About from './components/About'
import { Provider } from 'react-redux'
import { store } from './store/store'

import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Link,
} from "react-router-dom"

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "about",
      element: <About />,
   },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>
)
