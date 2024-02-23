
import React, { useState } from 'react';
import { UserOutlined,  ShoppingCartOutlined  } from '@ant-design/icons';
import { Menu } from 'antd';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';

function Admin() {

const renderPage = (key)=>{
    switch(key) {
        case 'user':
            return (<AdminUser />)

        case 'product':
            return (<AdminProduct />)
        default :
        return (<AdminProduct />)
    }

}

const [keySeLected, setKeySeLected] = useState('');



function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Quản Lý Hàng', 'product', <ShoppingCartOutlined />),
  getItem('Quản Lý Nhân Viên', 'user', <UserOutlined />, ),
];

// submenu keys of first level
const rootSubmenuKeys = ['product', 'user'];
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleClick = ({key})=>{
    setKeySeLected(key)


  }

  return (

    <div className='flex'>
    <Menu 
    className='h-[100vh]'
      mode="inline"
      style={{
        width: 256,
      }}
      items={items}
      onClick={handleClick}
    />
    <div>
       {renderPage(keySeLected)}
    </div>

    </div> 
  );
};
 

export default Admin;