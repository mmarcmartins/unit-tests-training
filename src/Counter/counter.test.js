import { shallow } from 'enzyme';
import React from 'react';
import Counter from './counter';

describe('Some message', () => {
    const setState = jest.fn();    
    const useStateMock = (initState) => [initState, setState];

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Is a test where we want to mock useState', () => {
          jest.spyOn(React, 'useState').mockImplementation(useStateMock);
          const wrapper = shallow(<Counter/>);
          wrapper.find('#count-up').simulate('click');          
          expect(setState).toHaveBeenCalledWith(1);          
    });

    it('Is a test where we want to mock useState', () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const wrapper = shallow(<Counter/>);
        wrapper.find('#count-down').simulate('click');          
        expect(setState).toHaveBeenCalledWith(-1);          
  });
});