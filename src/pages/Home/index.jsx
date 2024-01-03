import background from '../../assets/background/aaa.jpg';

function Home() {
	return (
		<div className="slide-show banner ">
			{<img className="object-cover  w-full h-auto m-auto mt-[50px]" src={background} alt="" />}
		</div>
	);
}

export default Home;
