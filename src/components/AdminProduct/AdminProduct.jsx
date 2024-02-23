import {PlusOutlined}  from '@ant-design/icons';
import { Modal, Space, Table, Tag } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState, useEffect} from 'react';


function AdminProduct() {
    const { Column, ColumnGroup } = Table;
    const [isModalOpen, setIsModalOpen] = useState(false);
    //call AIp

    const [products, setProducts] = useState([{
        name : "Túi Da Cao Cấp",
        img : "https://latashop.com/products/tui-xach-da-nu-hinh-thang-lata-tx10",
        price :"750.000"
    }]);

    useEffect(()=>{

        fetch("http://localhost:3009/api/createproduct/getProduct")
        .then(res=> res.json())
        .then(data => setProducts(data))

    })

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };


const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



    return (
        <>
        <div className="ml-[20px]">
            <h2 className="font-bold mt-6">Quản Lý Sản Phẩm</h2>
            <button  onClick={showModal} className='mt-8 w-[100px] h-[100px]  border-solid border-2 border-indigo-600 rounded '><PlusOutlined /></button>
        </div>

        <Modal title="Thêm sản phẩm mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
        <Form
        name="basic"
        labelCol={{
        span: 8,
        }}
        wrapperCol={{
        span: 16,
        }}
        style={{
        maxWidth: 600,
        }}
        initialValues={{
        remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
        label="Tên"
        name="Tên"
        rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
        ]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Giá"
        name="Giá"
        rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
        ]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Mô Tả"
        name="decription"
        rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
        ]}
        >
        <Input />
        </Form.Item>




        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        >
        </Form.Item>
    </Form>

        </Modal>


             <div className="relative overflow-x-auto min-w-[1000px] mt-[100px]">
             <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                 <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                     <tr>
                         <th scope="col" className="px-6 py-3">
                             Product name
                         </th>
                         <th scope="col" className="px-6 py-3">
                             Decription
                         </th>
                         <th scope="col" className="px-6 py-3">
                             Price
                         </th>
                         <th scope="col" className="px-6 py-3">
                            Action
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                 {products.map((product)=>(
             
                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.name}
                         </th>
                         <td className="px-6 py-4">
                         Decription
                         </td>
                         <td className="px-6 py-4">
                       {product.price}
                         </td>
                         <td className="px-6 py-4">
                             <Button>Update</Button>
                             <Button className='ml-2'>Delete</Button>
                         </td>
                     </tr>
            ))}

                 </tbody>
             </table>
         </div>
 






        </>

    );
}

export default AdminProduct;