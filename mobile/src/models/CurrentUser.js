import { types } from 'mobx-state-tree';
import { UserBusinessModel } from './UserBusiness';

export const CurrentUserModel = types
.model('CurrentUserModel', {
  _id: types.identifier,
  firstName: types.string,
  lastName: types.string,
  avatarUrl: types.maybe(types.string),
  adresses: types.optional(types.array(UserBusinessModel), []),
})
.views(self => {
  get businessIsEmpty() {
    return self.adresses.length === 0;
  },
});


