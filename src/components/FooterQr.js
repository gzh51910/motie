import React from 'react';
import '../css/FooterQr.css';
function FooterQr(){
    return (
        <div id="FooterQr">
            <p className="FooterQr-Tip">关注官方公众号【醉唐中文网】，方便下次阅读</p>
            <p className="FooterQr-code">
                <i><img src="https://cdn.motieimg.com/web/site/barcode/6d5.jpg" /></i>
                <span>— 微信内可长按识别 —</span>
            </p>
            <p className="FooterQr-Link">
                <a>首页</a><span>|</span><a>客户端</a><span>|</span><a>版权合作</a>
            </p>
            <p className="FooterQr-Motie">
                @2019磨铁阅读
            </p>

            
        </div>
    )
}

export default FooterQr;