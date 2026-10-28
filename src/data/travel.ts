// Travel — countries visited and what's next. Empty until real content is
// added; the page shows an honest "nothing here yet" state rather than
// placeholder entries. Add real countries/trips here when ready.

export type VisitedCountry = {
  name: string;
  year?: string;
  note?: string;
};

export type NextStop = {
  name: string;
  note?: string;
};

export const travel = {
  visited: [] as VisitedCountry[], // TODO: add visited countries
  nextStop: null as NextStop | null, // TODO: set next planned trip
};
