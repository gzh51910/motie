import React,{Component} from 'react';
import { Radio, Input } from 'antd';

import '../css/found.css'
class Reg extends Component{
    state = {
        value: 1,
    }
    // onChange = e => {
    //     console.log('radio checked', e.target.value);
    //     this.setState({
    //       value: e.target.value,
    //     });
    //   };
    render(){
        // const radioStyle = {
        //     display: 'block',
        //     height: '30px',
        //     lineHeight: '30px',
        //   };
        return (
            
            
            <div>
               <h3>发现</h3>
               {/* <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio style={radioStyle} value={1}>
                    Option A
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                    Option B
                    </Radio>
                    <Radio style={radioStyle} value={3}>
                    Option C
                    </Radio>
                    <Radio style={radioStyle} value={4}>
                    More...
                    {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio>
                </Radio.Group> */}
                  
                {/* header */}
                <div className="top-pic">
                    <img src="100%"  src='https://cdn.motieimg.com/book/0015/151750/2.jpg?x-oss-process=style/book_big'></img>
                    <div className="dis-pic-info">
                        <dl>
                            <p>
                            白楹天生命中带福，哪怕穿成父母不详的八岁病弱小团子，也能逢凶化吉、趋利避害，不仅众多大佬纷纷主动献上大腿，就连各家动物也难逃她的魅力。
                            唯独那个被困冷宫的废太子，一点也不给她面子，....
                            </p>
                        </dl>
                    </div>
                </div>    


            </div>
        )
    }
}

export default Reg;