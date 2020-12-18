import { createStore } from 'effector';

import {
    loadAllUsers,
    createUser
} from './ListEvents';

const initialState = {
  isLoading: false,
  users: [],
};

const ListStore = createStore(initialState)
  .on(loadAllUsers, (state, isLoading) => ({ ...state, isLoading }))
  .on(createUser, (state, users) => ({ ...state, isLoading: false, users }))

export default ListStore;