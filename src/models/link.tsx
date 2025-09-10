export default class Link {
  id: string;
  title: string;
  url: string;
  description: string;

  constructor(id: string, title: string, url: string, description: string) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
  }
}
