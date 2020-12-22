import List from './List'
import React from 'react';
import { mount, shallow } from 'enzyme';
import axios from 'axios';
import { waitFor, act } from '@testing-library/react';

jest.mock('axios');

describe('tests', () => {

    it('Should fetch users', async () => {  

        const users = [{name: 'Leanne Graham'}];
        const resp = {data: users};     
        axios.get.mockResolvedValue(resp);
        let component;                
        await act( async () => {
            component = mount(<List/>);                        
        })
        component.update();
        expect(component.find('li')).toHaveLength(1);
        
    })
        
});
