import background from '../../assets/background/aaa.jpg';
import img from '../../assets/DanhSachSPHome/img2.jpg'
import { TbCurrencyDong } from "react-icons/tb";

function Home() {
	return (
		<div className="wrapper">
		<div className="slide-show banner ">
			{<img className="object-cover  w-full h-auto m-auto mt-[50px]" src={background} alt="" />}
		</div>

		<div className="product pb-[90px]">
			<h1 className='Title flex justify-center mt-24'>Túi Da Nổi Bật </h1>
			<p className='text-xl text-orange-400 text-center mb-10'>Bộ sưu tập balo nữ da thật Velisa mới nhất. Những sản phẩm cao cấp được chế tác từ da thật 100% cùng kinh nghiệm trên 10 năm của những người thợ giỏi sẽ giúp bạn trở nên năng động và nổi bật.</p>
			
			
			<div className="container-product w-[100%] flex cursor-pointer bg-emerald-200 flex-wrap ">
				<div className=" w-[25%] ">
				<img src={img} alt=""className='p-8' />
				<div className="name text-center opacity-85">Balo da thật Velisa</div>
				<div className="price  color-lime-400 flex justify-center text-2xl font-medium pb-10">1,600,000 <TbCurrencyDong className='mt-1' /> </div>
				</div>

				<div className=" w-[25%] ">
				<img src={img} alt=""className='p-8' />
				<div className="name text-center opacity-85">Balo da thật Velisa</div>
				<div className="price  color-lime-400 flex justify-center text-2xl font-medium pb-10">1,600,000 <TbCurrencyDong className='mt-1' /> </div>
				</div>

				<div className=" w-[25%] ">
				<img src={img} alt=""className='p-8' />
				<div className="name text-center opacity-85">Balo da thật Velisa</div>
				<div className="price  color-lime-400 flex justify-center text-2xl font-medium pb-10">1,600,000 <TbCurrencyDong className='mt-1' /> </div>
				</div>

				<div className="w-[25%] ">
				<img src={img} alt=""className='p-8' />
				<div className="name text-center opacity-85">Balo da thật Velisa</div>
				<div className="price  color-lime-400 flex justify-center text-2xl font-medium pb-10">1,600,000 <TbCurrencyDong className='mt-1' /> </div>
				</div>
					

			</div>


		</div>

		</div>
	);
}

export default Home;
