import { useEffect, useState } from "react";
import CartProduct from "../../components/CartProduct";
import img from "../../assets/DanhSachSPHome/IMG_8571.jpg"
 function AllProduct() {
    let count = 0;
    const [products, setProducts] = useState([{
        name : "Túi Da Cao Cấp",
        img : "https://latashop.com/products/tui-xach-da-nu-hinh-thang-lata-tx10",
        price :"750.000"
    }]);

    useEffect(()=>{

        fetch("http://localhost:3009/api/product/getProduct")
        .then(res=> res.json())
        .then(data => setProducts(data))

    })
    return <div>
        <h2  className="flex justify-center my-[20px] text-4xl font-bold">Top Sản Phẩm Mới Nhất</h2>
        <p className="flex justify-center my mb-[100px] text-gray-500">{products.forEach((sum)=>{
                count++;
        })} ({count} sản phẩm)</p>
        <div className="w-full flex flex-wrap">
            {products.map((product)=>(
             <CartProduct key={product._id} img={product.img} name={product.name} price={product.price} />
            ))}


        </div>

        </div>
  
   
    
   
}

export default AllProduct;
