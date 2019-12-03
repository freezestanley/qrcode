import React from 'react';
import table from './style/table.less';

const Table = (props) => {
    return (
    <div className={`${table.application}`}>
        <div className={`${table.b_title}`}>投保人信息</div>
        <div className={`${table.ap_info}`}>
          <ul>
              {
                  props.item.map((ele, idx) => (
                    <li key={idx}><div>{ele.label}</div><div>{ele.value}</div></li>
                  ))
              }
          </ul>
        </div>
    </div>);
};
export default Table;