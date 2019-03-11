export interface IDataType {
  id: string;
  location: {
    lat: number;
    lng: number;
  };
  distance: number;
  isAvailable: boolean;
  address: string;
  spotNumber: number;
}

export default [
  {
    id:          '1',
    location:    {
      lat: 37.763238,
      lng: -122.450728,
    },
    distance:    2.1,
    isAvailable: true,
    address:     '90 Schimmel Crossroad',
    spotNumber:  3212123,
    cost: 3.56,
  },
  {
    id:          '2',
    location:    {
      lat: 37.761253,
      lng: -122.446168,
    },
    distance:    3.6,
    isAvailable: false,
    address:     '37 Favian Lane Apt. 407',
    spotNumber:  234268,
    cost: 1.50,
  },
  {
    id:          '3',
    location:    {
      lat: 37.758815,
      lng: -122.438048,
    },
    distance:    1.8,
    isAvailable: true,
    address:     '43 Gutmann Skyway Apt. 917',
    spotNumber:  65753,
    cost: 2.70,
  },
  {
    id:          '4',
    location:    {
      lat: 37.761407,
      lng: -122.444950,
    },
    distance:    1.2,
    isAvailable: false,
    address:     '3925 Lucienne Flats Apt. 048',
    spotNumber:  4453,
    cost: 0,
  },
  {
    id:          '5',
    location:    {
      lat: 37.761383,
      lng: -122.437966,
    },
    distance:    2.2,
    isAvailable: true,
    address:     '8198 Bartell Glens Suite 689',
    spotNumber:  56743,
    cost: 1.20,
  },
  {
    id:          '6',
    location:    {
      lat: 37.759330,
      lng: -122.440595,
    },
    distance:    4.7,
    isAvailable: true,
    address:     '5414 Koelpin Vista Apt. 899',
    spotNumber:  343432,
    cost: 0,
  },
];
