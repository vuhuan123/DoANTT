import AllProduct from '../pages/AllProduct';
import AboutMe from '../pages/AboutMe/AboutME';
import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';
import DetailProduct from '../pages/DetailProduct';

const PublicRouter = [
	{ path: '/', component: Home },
	{ path: '/allproduct', component: AllProduct },
	{ path: '/aboutme', component: AboutMe },
	{ path: '/cart', component: Cart },
	{ path: '/detailproduct', component: DetailProduct },
];

const PrivateRouter = [];

export { PublicRouter, PrivateRouter };
