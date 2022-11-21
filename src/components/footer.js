import  '../styles/footer.css';
import logo1 from "../media/logo.png"
import { FacebookOutlined,TwitterOutlined,InstagramOutlined} from "@ant-design/icons";
const Footer = () => {
    return(
        <div className='footer'>
           
     <div className='one'>
        <img className='img' src={logo1}/>
        <div className='two'>
     porto e-Commerse.@2021.All rights Reserved.
 </div>
     </div>
     <p className='two'>About us</p>
     <p className='two'>Blog</p>
     <p className='two'>order Tracking</p>
     <p className='two'>contact Us</p>
<div className='questions'>QUESTIONS?
<p>1-888-123-456</p>
<button className='btn'>VISA</button>
<button className='btn'>PayPal</button>
<button className='btn'>Strip</button>
<button className='btn'>Verisign</button>
</div>
<div className='icon'><FacebookOutlined/></div>
<div className='icon'><TwitterOutlined/></div>
<div className='icon'><InstagramOutlined /></div>


     </div>
   

    )
}
export default Footer;