import Link from "../models/link";

export default class DataAccessObject {
  storageKey: string = "links";

  saveLink(
    id: string,
    title: string,
    url: string,
    description: string,
    tags: string[],
  ): boolean {
    //try to update first and if kuryt phuma mfwethu

    if (this.update(id, title, url, description, tags)) {
      return true;
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
    localStorage.setItem(this.storageKey, JSON.stringify(updatedLinks));
    return updated;
  }
}
