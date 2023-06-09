
import { RouterProvider } from 'react-router-dom';
import './App.css';
import ProductProvider from './context/ProductProvider';
import routes from './routes/routes';


function App() {
  

  return (
    <ProductProvider>
      <RouterProvider router={routes} />
    </ProductProvider>
  );
}

export default App;
