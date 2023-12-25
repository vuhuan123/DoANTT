import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
function Header() {
	const [login, setLogin] = useState(false);
	return (
		<header className="flex flex-col justify-center items-center w-full  fixed">
			<div className="w-full fixed  flex justify-center bg-red-600 relative">
				<div className="wrapper h-52 w-[1150px]">
					<div className="h-36 text-white items-center flex justify-around">
						<div className="logo font-mono text-5xl font-semibold">Ladodi</div>

						<div className="input relative ">
							<input
								type="text"
								className="block w-96 h-12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400  text-xl sm:leading-6 outline-none"
								placeholder="Tìm kiếm sản phẩm"
							/>
							<IoSearch className="absolute bottom-3 right-5  text-black " />
						</div>

						<div className="login flex text-xl">
							<a href="#" className="hover:text-red-100">
								Đăng Ký
							</a>
							<a href="#" className="ml-6 hover:text-red-100">
								Đăng Nhập
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="navigation h-16 text-white flex absolute bottom-0 w-full bg-gray-600 justify-center">
				<ul className="flex items-baseline w-[1150px] ">
					<li className="pt-3 pb-6 ml-20 hover:text-red-200 ">
						<Link to={'/'}>Home</Link>
					</li>
					<li className=" ml-20 hover:text-red-200 ">
						<Link to={'/allproduct'}>Product</Link>
					</li>
					<li className=" mx-20 hover:text-red-200 ">
						{' '}
						<Link to={'/faqs'}>FAQs</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
