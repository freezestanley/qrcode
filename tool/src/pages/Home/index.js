import React, { useState } from 'react';
import home from './style/home.less';
import { Link } from "react-router-dom";
import Header from "@/components/header";
import Table from "@/components/table";
import Qrcode from "./component/qrcode";
console.log('=====================');
console.log(home);
console.log('=====================');

const Home = (props) => {
  const [appName, setappName] = useState({value: ''});
  const [appCert, setappCert] = useState({value: ''});
  const [appCertNum, setappCertNum] = useState({value: ''});
  const [appPhoneNum, setappPhoneNum] = useState({value: ''});
  const [error, setError] = useState({value: false});

  const getValueBack = (e, type) => {
    // console.log('getValueBack');
    // console.log(e);
    if(type === 'name') {
      setappName({value: e.value});
    }
    if(type === 'type') {
      setappCert(e);
    }
    if(type === 'type') {
      setappCert(e);
    }
    if(type === 'mid') {
      setappPhoneNum(e);
    }
    if(type === 'cid') {
      setappCertNum(e);
    }
  };

  const submit = (e) => {
    if (!appName.value || !appCert.value || !appCertNum.value || !appPhoneNum.value) {
      setError({value:true});
    } else {
      setError({value:false});
      props.history.push({ pathname : '/detail', query : {
        app: {
          item: [
            {label:"姓  名",value: appName.value},
            {label:"证件类型",value: appCert.value},
            {label:"证件号码",value: appCertNum.value},
            {label:"手机号码",value: appPhoneNum.value}
          ]
        },
        ins: {
          item: [
            {label:"姓  名",value: appName.value},
            {label:"证件类型",value: appCert.value},
            {label:"证件号码",value: appCertNum.value},
            {label:"手机号码",value: appPhoneNum.value}
          ]
        }
      } });
    }
    // console.log(e);
  };

  return (
    <div className={`${home.home}`}>
      <Header title="订单填写"></Header>

      <div className={`${home.body}`}>

      <div className={`${home.application}`}>
          <div className={`${home.b_title}`}>投保人信息</div>
          <div className={`${home.ap_info}`}>
            <ul>
              <li><div>姓  名</div>
                <div>
                  <Qrcode type="name" txt={appName.value} getValue = {getValueBack}/>
                </div>
              </li>
              <li><div>证件类型</div>
                <div>
                  <Qrcode type="type" txt={appCert.value} getValue = {getValueBack}/>
                </div></li>
              <li><div>证件号码</div><div>
                  <Qrcode type="cid" txt={appCertNum.value} getValue = {getValueBack}/>
                  </div>
              </li>
              <li><div>手机号码</div><div>
                  <Qrcode type="mid" txt={appPhoneNum.value} getValue = {getValueBack}/>
                </div></li>
            </ul>
          </div>
        </div>

        <div className={`${home.application}`}>
          <div className={`${home.b_title}`}>被保人信息</div>
          <div className={`${home.ap_info}`}>
            <ul>
              <li><div>投保人关系</div><div>本人</div></li>
              <li><div>姓  名</div><div>{appName.value}</div></li>
              <li><div>证件类型</div><div>{appCert.value}</div></li>
              <li><div>证件号码</div><div>{appCertNum.value}</div></li>
              <li><div>手机号码</div><div>{appPhoneNum.value}</div></li>
            </ul>
          </div>
        </div>

              {/* <Table title={app.title} item={app.item}/>

        <Table title={ins.title} item={ins.item}/> */}



        <div className={`${home.article}`}>
          我已阅读并同意
          <a>《投保须知》</a>
          <a>《保险条款》</a>
          <a>《隐私声明》</a>
		    </div>
        <div  style={error.value ? {display:'block'} : {display:'none'}} className={`${home.error}`}>请完整填写您的投保信息</div>

      </div>

      <div className={`${home.product_buy}`}>
        <div className={`${home.buy_price}`}>
          价格：<span>￥</span> <span>50.00</span> <i>起</i>
        </div>
        <div 
          className={`${home.buy_button}`}
        >
          <div onClick={(e)=>submit()}>立即投保</div>
            {/* <Link to="/detail">立即投保</Link> */}
            {/* <Link to={{ pathname: '/detail' , query : { day: 'Friday' }}}>立即投保</Link> */}
        </div>
      </div>

    </div>
  );
};

export default Home;