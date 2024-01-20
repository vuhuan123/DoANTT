
import img from '../../assets/DanhSachSPHome/img2.jpg'
import { TbCurrencyDong } from "react-icons/tb";
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import CartProduct from '../../components/CartProduct';


function Home() {
	return (
		<div className="wrapper">
		<div className="slide-show banner ">
			{/* {<img className="object-cover  w-full h-auto m-auto mt-[50px]" src={background} alt="" />}   arrImg={[img1,img2]} */}

			<SliderComponent  />


		</div>

		<div className="product pb-[90px]">
			<h1 className='Title flex justify-center mt-24'>Túi Da Nổi Bật </h1>
			<p className='text-xl text-orange-400 text-center mb-10'>Bộ sưu tập balo nữ da thật Velisa mới nhất. Những sản phẩm cao cấp được chế tác từ da thật 100% cùng kinh nghiệm trên 10 năm của những người thợ giỏi sẽ giúp bạn trở nên năng động và nổi bật.</p>
			
			
			<div className="container-product w-[100%] flex cursor-pointer  flex-wrap ">
				<CartProduct img={img} />
				<CartProduct img={img} />
				<CartProduct img={img} />
				<CartProduct img={img} />

					

			</div>


		</div>


		</div>

	);
}

export default Home;
