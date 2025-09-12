import { useState } from "react";
import ListItem from "./listItem";
import type Link from "../models/link";
import DataAccessObject from "../Utils/dao";
const dao = new DataAccessObject();

interface RightMidSectionProps {
  links: Link[];
  onEdit(
    id: string,
    title: string,
    url: string,
    tags: string,
    description: string
  ): void;
  onUpdate(): void;
}

const RightMidSection = ({ links, onEdit, onUpdate }: RightMidSectionProps) => {
  return (
    <div id="rightMidSection">
      {links.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <h2>No created links...use the form to insert links!!</h2>
        </div>
      ) : (
        links.map((item) => (
          <ListItem
            id={item.id}
            key={item.id}
            title={item.title}
            url={item.url}
            tags={item.tags.toString()}
            description={item.description}
            onDelete={(url) => {
              const isDeleted = dao.deletelink(item.id);
              if (isDeleted) {
                console.log(`deleleted - ${url}`);
                onUpdate();
              }
            }}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default RightMidSection;
