import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

function MainLayout({ children }) {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<div className="container w-[1150px] mt-[130px] ">
				{/* <Sidebar /> */}
				<div className="content">{children}</div>
			</div>
			<Footer />
		</div>
	);
}

export default MainLayout;
