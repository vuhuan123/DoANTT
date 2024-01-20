import img from '../../assets/background/anhCH.jpg'

function AboutMe() {
    return <div className="cotainer">
        <h3 className="flex justify-center mt-[50px] font-bold">BOMSTORE – BỨT PHÁ GIỚI HẠN, CHẠM ĐẾN ĐỈNH CAO</h3>
        <div className='flex'>
        <p className="w-[40%] my-[80px]">
        Năm 2019 STARGO ra đời, chính là bước ngoặt của SAKOS khi mang đến làn gió mới trong phong cách thiết kế, chạm đến trái tim của giới trẻ.

Những sản phẩm của STARGO là thành quả của nhóm thiết kế trẻ, sáng tạo, luôn đặt mình vào vị trí của người dùng để lên “dây cót” ý tưởng. Do đó, STARGO đã và đang dẫn đầu xu hướng TRẺ với 3 yếu tố: MỚI LẠ – TỐI GIẢN – TIỆN LỢI và thổi bùng sức sống mới trong giới hành lý.
        </p>

        <img src={img} alt="" className='w-[600px] mx-[90px] my-[50px]' />

        </div>

        <div className="local flex">

            <div>

            <div className="text-large font-medium ">GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</div>
            <div className="py-[8px] font-light">0845136777</div>
            <div className="pb-[8px] opacity-60">Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</div>
            <div className="text-large font-medium">GÓP Ý & KHIẾU NẠI (08:30 - 20:30)</div>
            <div className="pt-[8px] pb-[30px]">0845136777</div>
            </div>

            <div className="map ml-[100px] mb-[50px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14339.417918554718!2d105.84003411810623!3d20.968868818982763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad12b7dd13ed%3A0x25a1dd8c76e2ef36!2sBom%20Store!5e0!3m2!1svi!2s!4v1704809567116!5m2!1svi!2s" className='w-[600px] h-[450px]' ></iframe>
            </div>
        </div>


    </div>;
}

export default AboutMe;
