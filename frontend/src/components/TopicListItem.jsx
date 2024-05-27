import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({title, key}) => {
  return (
    <div className="topic-list__item" key={key}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
