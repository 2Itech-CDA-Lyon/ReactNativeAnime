export default interface Anime {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    canonicalTitle: string,
  };
  relationships: any;
}
