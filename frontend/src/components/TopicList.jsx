import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((item) => (<TopicListItem title={item.title} key={item.id}/>))}
    </div>
  );
};

export default TopicList;
