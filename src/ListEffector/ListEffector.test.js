import ListEffector from './ListEffector'
import React from 'react';
import { mount, shallow } from 'enzyme';

jest.mock('./store/ListStore', () => {
    const { createStore } = jest.requireActual('effector');
    return createStore({
        isLoading: false,
        users: [
            {name : 'Marcelo Martins'}
        ]
    });
});

let useEffect;

describe('tests', () => {

    const mockUseEffect = () => {
        useEffect.mockImplementation(async f => await f());
    }

    beforeEach(() => {   
        useEffect = jest.spyOn(React, "useEffect");
    });

    it('Should fetch users', async () => {  
        mockUseEffect();
        const wrapper = shallow(<ListEffector />);
        expect(wrapper.find('li').text()).toContain('Marcelo Martins')
    })
        
});