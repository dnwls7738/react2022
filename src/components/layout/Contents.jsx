import React from "react";
// 페이지 본문을 감싸는 공통 main 레이아웃입니다.

function Contents({children}){
    return <main id="main">{children}</main>
}

export default Contents;