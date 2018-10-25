import * as React from 'react';
import "./Shenma.less";
import { connect } from 'dva';
import logo from './images/logo.png'
import top from './images/top.jpg'
import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
//import brief from './images/brief.png'




class App extends React.Component{
    
    public render(){
        const moment =require('moment');
        return(
            <div id="app">
            <div data-reactroot id="homeView">
            <div id="fix_head" className="head" >
            <div>
                <img className="logo" alt="logo" src={logo}/>
            </div>
            <ul>
                <li>
                    <a href="#####">产品功能</a>
                </li>
                <li>
                    <a href="#####">关于我们</a>
                </li>
                <li>
                    <a href="#####">联系方式</a>
                </li>
                <li>
                    <button>系统入口</button>
                </li>
            </ul>

            </div>
            <div className="head">
            <div>
                <img src={logo} />
            </div>
            <ul>
            <li>
                    <a href="#####">产品功能</a>
                </li>
                <li>
                    <a href="#####">关于我们</a>
                </li>
                <li>
                    <a href="#####">联系方式</a>
                </li>
                <li>
                    <button>系统入口</button>
                </li>
            </ul>
            
            </div>
            <div className="Conetent">
            <div id="iFrist" className="first">
                    <img src={top}/>
                <div>
                    <span className="text">专注于自驾行程的管理和营销工具</span>
                    <div>
                        <button>申请试用</button>
                    </div>
                </div>
            </div>
            <div id="functions" className="second">
                 <div>
                     <span>为什么选择神码</span>
                     <div><img/></div>
                     <ul>
                         <li>
                             <img id="img1" src={icon1}/>
                             <div>丰富的获客渠道</div>
                             <span>对接OTA平台，帮助旅行社、俱乐部获取稳定客户流量，同时协助用户自建微信公众号、网站来获取客户</span>
                         </li>
                         <li>
                             <img id="img2" src={icon2}/>
                             <div>方便的运营管理</div>
                             <span>为旅行社、俱乐部提供自驾线路管理，包括线路上架、下架及订单的管理，同时提供丰富的支付接口和简单便捷的财务管理支持</span>
                         </li>
                         <li>
                             <img id="img3" src={icon3}/>
                             <div>独特的自己路书</div>
                             <span>帮组旅行社发掘目的地旅游资源，提高运营线路的服务水平，形成有特色、有识别度的旅行产品</span>
                         </li>
                     </ul>
                 </div>
            </div>
            <div id="aboutus" className="third">
                <div id="url">
                    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;神码自驾，专注在自驾游领域
                    提供更好的工具和服务。以“工具+渠道”的模式，为国内自驾游俱乐部、汽车俱乐部、车友会
                    、4s店等提供自驾游SaaS产品、路书、运营和推广等服务，通过标准化和高产品体验的体验
                    ，低成本高效率的满足国内自驾游的组织者、参与者和服务者的需求，推动国内自驾游的高效有序发展。"
                </div>
            </div>
            </div>
            <div id="connect" className="foot">
                <div className="left">
                    <div className="title">商务合作</div>
                    <div>合作邮箱：marketing@smdrive.cn</div>
                    <div className="title">联系方式</div>
                
                <table>
                    <tbody>
                        <tr>
                            <td>热线：</td>
                            <td>010-81792510</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>10:00 - 19:00;&nbsp;(周一至周五，法定节假日除外)</td>
                            
                        </tr>
                        <tr>
                            <td></td>
                            <td>{moment().format("YYYY-MM-DD-dddd HH:mm:ss")}</td>
                        </tr>
                        
                        
                        <tr>
                            <td>地址：</td>
                            <td>北京昌平区回龙观东大街338号创客广场A座303</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>


            </div>
            </div>
        

        );
    }
}
export default connect()(App);