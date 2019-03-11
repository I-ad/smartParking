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
    distance:    1.5,
    isAvailable: true,
    address:     '0059 Ward Highway',
    spotNumber:  1234,
  },
  {
    id:          '2',
    location:    {
      lat: 37.761253,
      lng: -122.446168,
    },
    distance:    1.5,
    isAvailable: false,
    address:     '0059 Ward Highway',
    spotNumber:  1234,
  },
  {
    id:          '3',
    location:    {
      lat: 37.758815,
      lng: -122.438048,
    },
    distance:    1.5,
    isAvailable: true,
    address:     '0059 Ward Highway',
    spotNumber:  1234,
  },
  {
    id:          '4',
    location:    {
      lat: 37.761407,
      lng: -122.444950,
    },
    distance:    1.5,
    isAvailable: false,
    address:     '0059 Ward Highway',
    spotNumber:  1234,
  },
  {
    id:          '5',
    location:    {
      lat: 37.761383,
      lng: -122.437966,
    },
    distance:    1.5,
    isAvailable: true,
    address:     '0059 Ward Highway',
    spotNumber:  1234,
  },
  {
    id:          '6',
    location:    {
      lat: 37.759330,
      lng: -122.440595,
    },
    distance:    1.5,
    isAvailable: true,
    address:     '0059 Ward Highway',
    spotNumber:  1234,
  },
];
