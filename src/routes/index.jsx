import AllProduct from '../pages/AllProduct';
import Faqs from '../pages/FQAS/Faqs';
import Home from '../pages/Home';

const PublicRouter = [
	{ path: '/', component: Home },
	{ path: '/allproduct', component: AllProduct },
	{ path: '/faqs', component: Faqs },
];

const PrivateRouter = [];

export { PublicRouter, PrivateRouter };
