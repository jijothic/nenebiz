import { types } from 'mobx-state-tree';

export const UserBusinessModel = types.model({
  id: types.identifier,
  businessname: types.string,
  businesstype: types.string,
  busenesscategory: types.string,
  businessphonenumber: types.number,
  businessorder: types.string,
  businesslocation: types.string,
  businessUrl: types.maybeNull(types.string),
  businessServices: types.model({
    menu: types.maybeNull(types.number),
    services: types.maybeNull(types.number),
    products: types.maybeNull(types.number),
  }),
});