import React from 'react'
import { DownOutlined,UserOutlined,SearchOutlined,HeartOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import style from '../styles/header.module.scss'
import logo1 from "../media/logo.png"



const Header = () => {
    var items = [
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    EUR
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    USD
                </a>
            ),
            key: '1',
        },

    ];
    var items1 = [
        {
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    ENG
                </a>
            ),
            key: '2',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" >
                    FRA
                </a>
            ),
            key: '3',
        },

    ];


    return (
<div >
        <div className={style.headertop}>
            <p>Get 10% OFF at the Porto GAMES Selection |</p>
            <p className={style.shop}>Shop now!</p>

            <div>
                <Dropdown
                    menu={{
                        items,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            USD
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div>
                <Dropdown
                    menu={{
                        items1,
                    }}
                >
                    <a onClick={(e1) => e1.preventDefault()}>
                        <Space>
                            ENG
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>


            </div>



        </div>



        </div>
     










    )






}














export default Header