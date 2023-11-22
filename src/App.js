import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Fruit from './components/Fruit/Fruit'
import Vegetable from './components/Vegetable/Vegetable';
import Flower from './components/Flower/Flower';
import Home from './components/Home/Home';
import Tomato from './components/Tomato/Tomato';
import Jasmine from './components/Jasmine/Jasmine';
import Lemon from './components/Lemon/Lemon';
import Bot from './components/Bot/Bot';


function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/flower",
          element:<Flower/>,
          children:[
            {
              path:"jasmine",
              element:<Jasmine/>
            }
          ]
        },
        {
          path:"/fruit",
          element:<Fruit/>,
          children:[
            {
              path:"lemon",
              element:<Lemon/>
            }
          ]
        },
        {
          path:"/vegetable",
          element:<Vegetable/>,
          children:[
            {
              path:"tomato",
              element:<Tomato/>
            }
          ]
        },
        {
          path:"/bot",
          element:<Bot/>
        }
      ]
    }
  ]
  )
  return (
    <div>
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
