import * as listEvents from './ListEvents';
import listStore from './ListStore';
const nametest = 'Testing effector';

const userMock = [
    { name : nametest}
];

describe('ListStore', () => {
  it('should change Users when createUser is called', () => {
    listEvents.createUser(userMock);        
    expect(listStore.getState().users).toBe(userMock);
  });
});
