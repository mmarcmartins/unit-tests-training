import ListEffector from './ListEffector'
import React from 'react';
import { mount } from 'enzyme';

jest.mock('./store/ListStore', () => {
    const { createStore } = jest.requireActual('effector');
    return createStore({
        isLoading: false,
        users: [
            {name : 'Marcelo Martins'}
        ]
    });
});

describe('tests', () => {

    it('Should fetch users', async () => {  
        const wrapper = mount(<ListEffector />);
        expect(wrapper.find('li').text()).toContain('Marcelo Martins')
    })
        
});