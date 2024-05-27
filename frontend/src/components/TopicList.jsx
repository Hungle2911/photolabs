import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((item) => (<TopicListItem title={item.title} key={item.id}/>))}
    </div>
  );
};

export default TopicList;
