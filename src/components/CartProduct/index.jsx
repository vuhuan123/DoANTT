
import { TbCurrencyDong } from "react-icons/tb";
import { Link } from "react-router-dom";
function CartProduct({img, name, price}) {

    return <div className=" w-[23%] border-solid border-2 mx-[5px] my-[15px] rounded p-[10px]">
    <Link to="/detailproduct" >
    <img src={img} alt=""className=' hover:scale-110 hover:shadow-2xl w-[241px] h-[300px]'  />
    
    </Link>
    
    <div className="name text-center mt-[20px] opacity-85">{name}</div>
    <div className="price  color-lime-400 flex justify-center text-2xl font-medium pb-10">{price} <TbCurrencyDong className='mt-1' /> </div>
    </div>;
}

export default CartProduct;