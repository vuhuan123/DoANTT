import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional for styling
import Wrapper from '../../../Wrapper/Wrapper.jsx';

function Header() {
	const [login, setLogin] = useState(false);
	const [searchResult, setSearchResult] = useState([]);
	return (
		<header className="flex flex-col justify-center items-center w-full  fixed">
			<div className="w-full fixed  flex justify-center bg-red-600 relative">
				<div className="wrapper h-52 w-[1150px]">
					<div className="h-36 text-white items-center flex justify-around">
						<div className="logo font-mono text-5xl font-indie font-black">BOMSTORE</div>
						<span>
							<Tippy
								visible={searchResult.length > 0}
								interactive
								render={(attrs) => (
									<Wrapper>
										<div
											className="text-black w-[240px] text-xl pl-[10px] font-normal"
											tabIndex="-1"
											{...attrs}
										>
											Kết Quả Tìm Kiếm
										</div>
									</Wrapper>
								)}
							>
								<div className="input relative ">
									<input
										type="text"
										className="block w-96 h-12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400  text-xl sm:leading-6 outline-none"
										placeholder="Tìm kiếm sản phẩm"
									/>
									<IoSearch className="absolute bottom-3 right-5  text-black " />
								</div>
							</Tippy>
						</span>

						<div className="login flex  text-3xl cursor-pointer relative">
							<FaRegHeart className="mx-4  hover:opacity-50 " />
							<div className="absolute w-[16px] h-[16px] rounded-[50%] left-[18px] top-[-7px]  bg-black leading-[16px] text-center text-xl mb-[15px]">
								0
							</div>
							<FaRegUser className="mx-4  hover:opacity-50" />

							<Tippy
								render={(attrs) => (
									<Wrapper>
										<div className="box bg-white" tabIndex="-1" {...attrs}>
											<div className="minicart  w-[300px] h-[300px]">
												<h4 className="title text-center">Giỏ Hàng</h4>
												<div className="empty-cart h-full">
													<p className="alert m-8 text-xl pt-5">
														Bạn không có sản phẩm nào trong giỏ hàng
													</p>
												</div>
											</div>
										</div>
									</Wrapper>
								)}
							>
								<Link to="/cart">
									<FiShoppingCart className="mx-4  hover:opacity-50" />
								</Link>
							</Tippy>

							<div className="absolute w-[16px] h-[16px] rounded-[50%] left-[100px] top-[-7px]  bg-black leading-[16px] text-center text-xl mb-[15px]">
								0
							</div>
							{/* <a href="#" className="hover:text-red-100">
								Đăng Ký
							</a> */}
							{/* <a href="#" className="ml-6 hover:text-red-100">
								Đăng Nhập
							</a> */}
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
