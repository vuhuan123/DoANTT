import { TbCurrencyDong } from "react-icons/tb";
function CartProduct({img}) {
    return <div className=" w-[25%] ">
    <img src={img} alt=""className='p-8 hover:scale-125' />
    <div className="name text-center opacity-85">Balo da thật Velisa</div>
    <div className="price  color-lime-400 flex justify-center text-2xl font-medium pb-10">1,600,000 <TbCurrencyDong className='mt-1' /> </div>
    </div>;
}

export default CartProduct;