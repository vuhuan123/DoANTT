import AllProduct from '../pages/AllProduct';
import Faqs from '../pages/FQAS/Faqs';
import Home from '../pages/Home';
import Cart from '../pages/Cart/Cart';

const PublicRouter = [
	{ path: '/', component: Home },
	{ path: '/allproduct', component: AllProduct },
	{ path: '/faqs', component: Faqs },
	{ path: '/cart', component: Cart },
];

const PrivateRouter = [];

export { PublicRouter, PrivateRouter };
