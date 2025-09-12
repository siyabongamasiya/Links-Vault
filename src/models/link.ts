export default class Link {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];

  constructor(
    id: string,
    title: string,
    url: string,
    description: string,
    tags: string[]
  ) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
    this.tags = tags;
  }
}
