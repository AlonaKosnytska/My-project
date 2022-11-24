export interface CountryT{
    name: {
        common: string,
        official: string
    },
    region: string,
    capital?: string[],
    languages?: {
    name: string;
    nativeName: string;
  }[],
    area: number,
    flag: string,
    population: number,
    timezones: string[],
    borders?: string[],
    gini?: { [key: string]: number },
    maps: Maps,
    flags: {
    png: string;
    svg: string;
  },
  favCountry:boolean
    
}

export interface Maps {
    googleMaps: string
    openStreetMaps:string
}

