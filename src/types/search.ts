export interface ISearchInnerProps {
  isWeb?: boolean;
  handleModal: (key: string, value: boolean) => void;
  searchData: ISearchData;
}

export interface ISearchData {
  calendar: { checkIn: string; checkOut: string };
  occupancy: { adult: number; kid: number };
}
