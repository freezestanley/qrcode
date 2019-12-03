import React, { useState } from 'react';
import detail from './style/detail.less';
import { Link } from "react-router-dom";
import Header from "@/components/header";
import Table from "@/components/table";

const item = [
    {label:"姓  名",value:""},
    {label:"证件类型",value:""},
    {label:"证件号码",value:""},
    {label:"手机号码",value:""},
  ];
const Detail = (props) => {
    let appitem;
    if (props.history.location.query && props.history.location.query.app && props.history.location.query.app.item) {
        appitem = props.history.location.query.app.item;
    } else {
        appitem = item;
    }
    return (
        <div className={`${detail.detail}`}>
            <Header title="保单详情"></Header>
            <div className={`${detail.content}`}>
            <Table title={"投保人信息"} item={appitem}/>
            <Table title={"被保人信息"} item={appitem}/>
            
            <div className={`${detail.infoTitle}`}>投保信息</div>
                <div className={`${detail.ap_info}`}>
                    <ul>
                        <li><div>保障期限</div><div>2019-12-02 00:00:00 至 2020-12-01 23:59:59</div></li>
                        <li><div>受益人</div><div>法定受益人</div></li>
                        <li><div>保障额度</div></li>
                    </ul>
                </div>
                <ul className={`${detail.art_info}`}>
                    <li><div>人身意外伤害-身故、残疾(附加恐怖活动条款)</div><div>100,000元</div></li>
                    <li><div>火车（含地铁、轻轨）意外伤害身故、残疾</div><div>200,000元</div></li>
                    <li><div>航空意外伤害身故、残疾</div><div>10,000,000元</div></li>
                    <li><div>意外医疗费用补偿</div><div>30,000元</div></li>
                    <li><div>紧急医疗运送和送返</div><div>30,000元</div></li>
                    <li><div>个人物品损失</div><div>5,000元</div></li>
                </ul>
            </div>
            <div className={`${detail.comfirm}`}>
                <div className={`${detail.price}`}>应付金额：<span>￥79</span></div>
                <div className={`${detail.comfirm_btn}`}
                    onClick={() => props.history.push('success')}
                >确认支付</div>
            </div>
        </div>
      );
};
export default Detail;