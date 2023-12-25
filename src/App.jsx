import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { PublicRouter } from './routes';
import MainLayout from './components/Layout/MainLayout/MainLayout.jsx';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {PublicRouter.map((route, index) => {
                        const Layout = MainLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
