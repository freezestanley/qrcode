import React from 'react';
import success from './style/success.less';
import { Link } from "react-router-dom";
import Header from "@/components/header";

const Success = (props) => (
    <div className={`${success.success}`}>
        <Header 
            title="支付成功"
            forword={false}
            backword={false}
        ></Header>
        <div className={`${success.suinfo}`}>
            <div className={`${success.order}`}>订单号：H000019050380271</div>
            <div className={`${success.ordersus}`}>支付成功</div>
            <div className={`${success.ordertxt}`}>您的保单将在24小时后生效</div>
        </div>
    </div>
  );

export default Success;