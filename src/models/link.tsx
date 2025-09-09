export default class Link {
  title: string;
  url: string;
  description: string;

  constructor(title: string, url: string, description: string) {
    this.title = title;
    this.url = url;
    this.description = description;
  }
}
