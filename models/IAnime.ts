export default interface IAnime {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    canonicalTitle: string,
  };
  relationships: any;
};
