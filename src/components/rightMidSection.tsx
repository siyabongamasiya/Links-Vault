import { useState } from "react";
import ListItem from "./listItem";
import type Link from "../models/link";

const RightMidSection = () => {
  const [items, setItems] = useState<Link[]>([
     {
      title: "barca",
      url: "www.youtube.com/27632387s2",
      description: "barca vs madrid highlights",
    },
     {
      title: "barca",
      url: "www.youtube.com/27632387s2",
      description: "barca vs madrid highlights",
    },
     {
      title: "barca",
      url: "www.youtube.com/27632387s2",
      description: "barca vs madrid highlights",
    },
     {
      title: "barca",
      url: "www.youtube.com/27632387s2",
      description: "barca vs madrid highlights",
    },
     {
      title: "barca",
      url: "www.youtube.com/27632387s2",
      description: "barca vs madrid highlights",
    },
  ]);

  return (
    <div id="rightMidSection">
      {items.map((item) => (
        <ListItem
          key={item.url}
          title={item.title}
          url={item.url}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default RightMidSection;
