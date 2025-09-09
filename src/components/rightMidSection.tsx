import { useState } from "react";
import ListItem from "./listItem";
import type Link from "../models/link";

const RightMidSection = () => {
  const [items, setItems] = useState<Link[]>([]);

  return (
    <div>
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
