import React, { memo } from 'react';
import { GoodsWrapper } from "./style";
// 组件
// import PageContent from "@/components/pageContent";
// import PageModal from "@/components/pageModal";
import MyTable from "@/components/myTable"
/* 配置 */
import { contentConfig } from "./config/content";
// import { modalConfig } from "./config/modal";

const Goods = memo(() => {
  return (
    <GoodsWrapper>
      {/* <div class="content-bar">
        <span class="content-title">用户管理</span>
      </div> */}
      <MyTable contentConfig={contentConfig}/>
      {/* <PageContent contentConfig={contentConfig}/>
      <PageModal modalConfig={modalConfig}/> */}
    </GoodsWrapper>
  );
});

export default Goods;