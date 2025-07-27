import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// layouts
import RootLayout from './layouts/RootLayout';

// pages
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

// utils
import { handleSlugRedirect } from './utils/redirect';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":slug" element={<NotFound />} loader={handleSlugRedirect} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
