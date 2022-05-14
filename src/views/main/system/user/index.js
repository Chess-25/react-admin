import React, { memo } from 'react';
import { UserWrapper } from "./style";
// 组件
// import PageContent from "@/components/pageContent";
import MyTable from "@/components/myTable"
/* 配置 */
import { contentConfig } from "./config/content";
import { modalConfig } from "./config/modal";

const User = memo(() => {
  return (
    <UserWrapper>
      {/* <div class="content-bar">
        <span class="content-title">用户管理</span>
      </div> */}
      <MyTable contentConfig={contentConfig} modalConfig={modalConfig}/>
      {/* <PageContent contentConfig={contentConfig}/> */}
    </UserWrapper>
  );
});

export default User;