import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useLocation, useHistory } from 'react-router-dom';

import { tagsListAction } from "@/store/menu/actionCreaters"

import { TagsViewWrapper }from "./style"

import { Tag } from 'antd';
import {
  CheckCircleOutlined
} from '@ant-design/icons';

const TagsView = memo(() => {

  const { tagsList } = useSelector((state) => ({
    tagsList: JSON.parse(JSON.stringify(state.menu.tagsList)),
  }),shallowEqual);
  const dispatch = useDispatch() 
  const location = useLocation()
  const history = useHistory()
  const toView = (path)=>{
    history.push(path)
  }
  const CloseTags = (name,path)=>{
    const tagIndex = tagsList.findIndex(tag => tag.name === name)
    tagsList.splice(tagIndex,1)
    if (location.pathname===path) {
      const closeTagPath = tagsList[tagIndex-1].path
      history.push(closeTagPath)
    }
    dispatch(tagsListAction(tagsList))
  }
  return (
    <TagsViewWrapper>
      {tagsList.map(tag=>{
        return(
          <div key={tag.name} onClick={e=>toView(tag.path)}>
            {location.pathname===tag.path?
              //当前页面为活跃tag
              tag.name==='首页'?<Tag className='activeTag' color="success" icon={<CheckCircleOutlined/>}>{tag.name}</Tag>
              :<Tag className='activeTag' color="success" icon={<CheckCircleOutlined/>} closable onClose={e => CloseTags(tag.name,tag.path)}>{tag.name}</Tag>
              //当前页面不是活跃tag
              :tag.name==='首页'?<Tag className='tag'>{tag.name}</Tag>:<Tag className='tag' key={tag.name} closable onClose={e => CloseTags(tag.name)}>{tag.name}</Tag>}
          </div>
        )
      })}
    </TagsViewWrapper>
  );
});

export default TagsView;