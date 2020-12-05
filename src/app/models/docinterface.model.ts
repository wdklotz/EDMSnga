export interface DocInterface {
  id       : number,
  Favorite : string,
  Document : string,
  author   : number,
  type     : number,
  shelf    : number,
  Keywords : string,
  Trash    : string,
  Author   : string,
  Type     : string,
  Shelf    : string,
  select?  : boolean,
}

export interface SearchResult {
  documents: Array<DocInterface>;
  total: number;
}

export interface State {
  // page: number;
  // pageSize: number;
  searchTerm: string;
  // sortColumn: SortColumn;
  // sortDirection: SortDirection;
}
