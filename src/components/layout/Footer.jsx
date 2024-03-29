import React from 'react';

function Footer(props){
    return(
        <footer id='footer' className= {props.color}>
            <div>
                <h4>Email</h4>
                <a href="mailto:dnwls7738@naver.com">dnwls7738@naver.com</a>
            </div>
            <div>
                <h4>kakao</h4>
                <a href="#">zxcv5274</a>
            </div>
            <div>
                <h4>social</h4>
                <ul>
                    <li><a href="https://www.youtube.com/channel/UCuaqGba8-mt9QSOE9HtJX9g">Youtube</a></li>
                    <li><a href="https://www.instagram.com/wooo_j2/">Instargram</a></li>
                    <li><a href="https://github.com/dnwls7738">Github</a></li>
                    <li><a href="https://dnwls7738.github.io/webs_class/refer/index.html">Reference</a></li>
                    <li><a href="#">Tutorials</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;