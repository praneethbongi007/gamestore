import React, { useEffect, useState } from 'react';
import style from "../styles/main.module.scss"
import axios from 'axios';
import logo1 from "../media/home_banner1.jpg"
import logo2 from "../media/home_banner2.jpg"
import logo3 from "../media/home_banner3.jpg"
const Main = () => {

    let [productsData, setProductsData] = useState("");

    const fetchData = async () => {
        try {

            const data = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668790007/React%20Class/Praneeth/popular_uwsjsx.json")
            console.log(data);
            setProductsData(data.data.data)
        } catch (error) {
            console.log(error);
        }



    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(productsData)



    return (
        <>
            <div className='banner' style={{display:"flex",justifyContent:"center",width:"100%",backgroundColor:"black",paddingTop:"3rem"}}>
                <div>
                    <img src={logo1} className={style.image1} /><span>heelo</span>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <img src={logo2} className={style.image2} />
                    <img src={logo3} className={style.image3} />
                </div>

            </div>
            <h1 style={{color:"blue",backgroundColor:"black",padding:"3rem"}}>Featured Product and Offers</h1>
        <div className={style.imgContainer}>


            {productsData && productsData.map(e => (

                <div >
                    {/* {e && e.pictures.map((f) => ( */}

                    <div>
                        <img src={e.pictures[0].url} className={style.image} />
                        <p className={style.name}>Genere:{e.categories[0].slug}</p>
                        <p className={style.name}>{e.name} </p>
                        <p className={style.name}><strike>${e.price[1]}</strike> ${e.price[0]}</p>
                        <p className={style.name}>Stocks Left:{e.stock}</p>


                    </div>
                    {/* ))} */}


                </div>


            ))}
        </div>
        </>
    )




}



export default Main