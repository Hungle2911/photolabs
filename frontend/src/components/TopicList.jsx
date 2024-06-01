import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({topics, getPhotosByTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((item) => (<TopicListItem topic={item} key={item.id} getPhotosByTopic={getPhotosByTopic}/>))}
    </div>
  );
};

export default TopicList;
