import logo from '../../../../assets/logo/BomStore.png'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

function Footer() {
    return <div className="wrapper-footer flex bg-teal-900 text-white w-full justify-center text-2xl">
        <div className="container w-[1150px] flex py-[50px] ">
                <div className="logo w-[33.333%]">
                    <img src={logo} alt=""  className='w-[150px]'/>
                    <h2 className='pt-9'>TRĂM NĂM MỘT GIÁ TRỊ</h2>
                </div>

                <div className="footer-contact w-[33.333%]">
                    <h2 className='pb-4'>Liên Hệ</h2>
                    <p className='pb-4'>Vũ Gia - Túi Da Cao Cấp được lập từ 2016 sau 1 thời gian dài hoạt động đặt được niềm tin và ưu thích của quý khách hàng</p>
                    <p className='pb-4'>Địa chỉ: Số 7 Ngách 5/72 Đường Hoàng Quốc Việt, Nghĩa Đô, Cầu Giấy, Hà Nội, Việt Nam</p>
                   
                   <span className='flex'>
                   <BsFillTelephoneFill  /> 
                    <p className='flex pb-4 pl-5'> Số điện thoại: 0968 39 6062</p>

                   </span>

                   <span className='flex'>
                   <IoMdMail /> 
                   <p  className='flex pb-4  pl-5'> Email: shoptuivugia@gmail.com</p>

                   </span>

                  
                </div>

                <div className="footer-product pl-[50px]">
                    <h2 className='pb-4'>Sản phẩm</h2>
                    <h2 className='pb-4'> - TÚI XÁCH CÔNG SỞ</h2>
                    <h2 className='pb-4'> -  TÚI DA BÒ - DA THẬT</h2>
                    <h2 className='pb-4'> -  CẶP DA</h2>
                    <h2 className='pb-4'> - TÚI XÁCH CÔNG SỞ</h2>

                </div>
        </div>

    </div>;
}

export default Footer;
