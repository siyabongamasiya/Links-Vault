import { toast } from "sonner";
import Link from "../models/link";
import allValuesAreValid, { isValidUrl } from "./stringValidator";
import Toast from "./Toast";

export default class DataAccessObject {
  storageKey: string = "links";

  saveLink(
    id: string,
    title: string,
    url: string,
    description: string,
    tags: string[]
  ): boolean {
    //try to update first and if kuryt phuma mfwethu
    if (!allValuesAreValid(title, description, url)) {
      Toast(
        `All these values(Title,Url and Description) must be have values!!`
      );
      return false;
    }
    if (this.update(id, title, url, description, tags)) {
      return true;
    }

    if (!isValidUrl(url)) {
      toast.error("Please enter the full valid  URL!!", { duration: 5000 });
      return false;
    }
    //get list
    const linkList = this.getLinks();
    //create object
    let newLink = undefined;
    if (linkList) {
      newLink = new Link(id, title, url, description, tags);
      //add to list
      linkList.push(newLink);
      //save list
      localStorage.setItem(this.storageKey, JSON.stringify(linkList));
      Toast(`Added ${title} successfully!!`);
      return true;
    } else {
      //create new array and insert to it
      localStorage.setItem(this.storageKey, JSON.stringify([]));
      const newLinkList = this.getLinks();
      newLink = new Link(id, title, url, description, tags);
      //add to list
      newLinkList!.push(newLink);
      //save list
      localStorage.setItem(this.storageKey, JSON.stringify(newLinkList));
      Toast(`Added ${title} successfully!!`);
      return true;
    }
  }

  getLinks(): Link[] | null {
    const linksJSON = localStorage.getItem(this.storageKey);
    const linkList: Link[] = linksJSON ? JSON.parse(linksJSON) : null;
    return linkList;
  }

  deletelink(id: string): boolean {
    try {
      const links: Link[] = this.getLinks()!;
      const newLinksArray = links.filter((link) => {
        return link.id != id;
      });
      localStorage.setItem(this.storageKey, JSON.stringify(newLinksArray));
      Toast(`Deleted successfuly!!`);
      return true;
    } catch (error) {
      return false;
    }
  }

  update(
    id: string,
    title: string,
    url: string,
    description: string,
    tags: string[]
  ) {
    let updated = false;
    //get list
    const currentLinks: Link[] | null = this.getLinks();

    if (!currentLinks) {
      return false;
    }
    //check if exists
    const updatedLinks = currentLinks?.map((link) => {
      console.log(`${link.id} and ${id}`);
      if (link.id === id) {
        updated = true;

        return new Link(id, title, url, description, tags);
      } else {
        return link;
      }
    });
    if (updated) {
      localStorage.setItem(this.storageKey, JSON.stringify(updatedLinks));
      Toast(`Updated ${title} successfuly!!`);
      return updated;
    } else {
      return false;
    }
  }
}
