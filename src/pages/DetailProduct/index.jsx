import img from "../../assets/DanhSachSPHome/img1.jpg"
import { TbCurrencyDong } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { IoCarOutline } from "react-icons/io5";
import { GoInbox } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";


function DetailProduct() {


    const [count, setCount] = useState(1)

    const handelMinus = ()=>{
        if(count > 1){
            setCount(count - 1)
        }
    }
    const handlePlus = ()=>{
        setCount (count + 1)
    }



    return <div className="flex mb-12 w-full"  >
        <img src={img} alt=""  className="h-[500px] w-[40%]"/>
        <div className="w-[60%] ml-[80px]">
            <h2 className=" text-5xl font-bold flex justify-center mt-8">Balo da thật Velisa</h2>
            <div className="flex my-12">
             <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />

            </div>
            <div className="flex  mt-8  font-bold pb-4  border-b-[1px] border-black">1,600,000 <TbCurrencyDong className='mt-1' /></div>
            
            <div className="flex  mt-[50px] ">


            <input type="button"  defaultValue={"-"} onClick={handelMinus} className="cursor-pointer w-[41px] h-[41px] text-center font-[16px] bg-gray-200"/>
            <input type="text"   value={count} min={1} className="bg-white h-[41px] text-center w-[70px] border border-gray-200 " />
            <input type="button"  defaultValue={"+"} onClick={handlePlus} className="cursor-pointer w-[41px] h-[41px] text-center font-[16px] bg-gray-200"/>
            </div>
            <div className="mt-[50px] flex">

                <button className="bg-white w-[150px] h-[70px] border boder-white" ><a href="">Thêm Vào Giỏ</a> </button>
                <button className="bg-black text-white w-[150px] h-[70px] border boder-white ml-[50px]" > <a href="">Mua Ngay</a></button>

            </div>

            <ul className="mt-[50px]">
                <li className="flex mb-6"><IoCarOutline className="text-4xl" /> <span> <div className="text-2xl ml-10 font-semibold">MIỄN PHÍ GIAO HÀNG TOÀN QUỐC </div><p className="text-xl text-center font-thin text-neutral-500">(Cho đơn hàng trên 299.000đ)</p> </span> </li>
                <li className="flex  mb-6"><GoInbox className="text-4xl" /> <span> <div className="text-2xl ml-10 font-semibold">ĐỔI TRẢ HÀNG DỄ DÀNG  </div><p className="text-xl text-center font-thin text-neutral-500 ml-[43px]">(Trong vòng 7 ngày kể từ ngày nhận)</p> </span> </li>
                <li className="flex"><LuPhoneCall  className="text-4xl"/> <span> <div className="text-2xl ml-10 font-semibold">HOTLINE MUA HÀNG 090 6564 798 </div><p className="text-xl text-center font-thin text-neutral-500">(Hỗ trợ sản phẩm và đặt hàng)</p> </span> </li>
              
            </ul>
        </div>

    </div>;
}

export default DetailProduct;