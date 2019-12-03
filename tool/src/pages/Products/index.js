import React from 'react';
import { Link } from "react-router-dom";
import product from './style/product.less';
import A1 from './img/a1.png';
import A2 from './img/a2.png';
import A3 from './img/a3.png';
import A4 from './img/a4.png';
import A5 from './img/a5.png';
import A6 from './img/a6.png';
import A7 from './img/a7.png';
import A8 from './img/a8.png';
import A9 from './img/a9.png';
const Products = (props) => {
  return (
    <div className={`${product.content}`}>
      <div className={`${product.product_title}`}>重大疾病保险</div>
      <div >
        <img src={A1} width="100%"/>
      </div>
      <div className={`${product.product_info}`}>
        <div className={`${product.product_first_child}`}>
          <span className={`${product.pro_name}`}>乐活e生2019重大疾病保险</span> 
          <span className={`${product.pro_type}`}><em>重疾险</em></span>
        </div> 
        <div className={`${product.product_info2}`}>
          <span>保障期限:1年</span>
          <span>投保年龄:30天-60周岁（精选版、至尊版限18周岁—40周岁可投保）</span>
        </div>
        <div className={`${product.product_info3}`}>
          更多详情阅读 <span>《投保须知》</span> <span>《条款详情》</span>和<span>《隐私声明》</span>
        </div>
      </div>
      <div >
        <img src={A2} width="100%"/>
        <img src={A3} width="100%"/>
        <img src={A4} width="100%"/>
        <img src={A5} width="100%"/>
        <img src={A6} width="100%"/>
        <img src={A7} width="100%"/>
        <img src={A8} width="100%"/>
        <img src={A9} width="100%"/>
      </div>
      <div className={`${product.product_buy}`}>
        <div className={`${product.buy_price}`}>
          价格：<span>￥</span> <span>50.00</span> <i>起</i>
        </div>
        <div 
          className={`${product.buy_button}`}
    
        >
            <Link to="/home">立即投保</Link>
        </div>
      </div>
    </div>);
};

export default Products;