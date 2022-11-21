import React from 'react'
import { DownOutlined, UserOutlined, SearchOutlined, HeartOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { Dropdown, Space, message } from 'antd';
import style from '../styles/headerbottom.module.scss';
import logo1 from "../media/logo.png";
import { click } from '@testing-library/user-event/dist/click';



const Header1 = () => {

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  // const menu = (
  //   <Menu>
  //     <Menu.Item>Income</Menu.Item>
  //     <Menu.Item>Expenses</Menu.Item>

  //   </Menu>
  // );



  const onHover = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items1 = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  return (
    <div >


      <div className={style.headerbottom}>

        <img className={style.imgg} src={logo1} />

        <p>  <Dropdown
          menu={{
            items,
            onClick,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              GAMES
              <DownOutlined />
            </Space>
          </a>
        </Dropdown></p>

        <p><Dropdown
          menu={{
            items1,
            onHover,
          }}
          // overlay={menu}
          // trigger={[click]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              PRODUCTS
              <DownOutlined />
            </Space>
          </a>
        </Dropdown></p>

        <p><StarOutlined />BUY PORTO</p>
        <p>DEALS</p>
        <p className='icons'>< UserOutlined /></p>
        <p className='icons'><SearchOutlined  /></p>
        <p className='icons'><HeartOutlined/></p>
        <p className='icons'><ShoppingCartOutlined /></p>
      </div>










    </div>











  )






}














export default Header1