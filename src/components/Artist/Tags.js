import React from "react";

const Tags = ({ tags }) => {
  return (
    <section>
      tags
      {tags.map((genre) => {
        return <p>{genre}</p>;
      })}
    </section>
  );
};

export default Tags;
