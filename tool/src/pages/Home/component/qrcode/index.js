import React from 'react';
import Qr from '@/asset/images/qrcode.png';
import qrcode from './style/qrcode.less';
class Qrcode extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {
            qrcode: '',
            type: 'input',
            qtype: props.type,
            txt: props.txt
        };
    }
    componentDidMount() {

        this.setState({
          color: "blue",
          qrcode: window.input.default.getQrcode(this.state.qtype)
        });
        console.log('componentDidMount');
        // window.input.default.getQrcode.then((success)=>{
        //     console.log(success);
        // },(error)=>{
        //     console.log(error);
        // });
        // let image = new Image();
        // image.src = 'http://192.168.1.2:7000/qr?id=1575209868249';
        // let _self = this;
        // image.onload = function (){
        //     _self.setState({
        //         color: 'http://192.168.1.2:7000/qr?id=1575209868249'
        //       });
        // };
    }
    handleClick(e) {
      console.log(this); // null
      let _self = this;
      this.setState({
        type: "qrcode"
      }, () => {
        let result = window.input.default.listenerInfo(_self.props.type);
        result.then((succ)=> {
            _self.setState({
                txt: succ.value
            });
            _self.closemask();
            _self.props.getValue(succ, _self.props.type);
            // console.log(succ);

        }, err => {
            console.log(err);
        });
      });
    }
    closemask (e) {
        this.setState({
            type: "input"
          }, () => {
            console.log('input');
            window.input.default.endListener();
        });
    }
    render() {
      return (
        <div className={`${qrcode.qrcode}`}>
            <input 
                value = {`${this.state.txt}`}
                className={`${qrcode.input}`} 
                placeholder="请填写"  
                type="text"  
                onClick={(e) => this.handleClick(e)} 
                readOnly/>

            <div className={`${qrcode.mask}`} ref="mask"
                onClick={(e) => this.closemask(e)}
                style = {this.state.type === 'qrcode' ? {display: 'block'} : {display: 'none'}}
            >
                <img className={`${qrcode.img}`} src={this.state.qrcode} ref="qrcode"/>
            </div>
            

        </div>
      );
    }
}
export default Qrcode;