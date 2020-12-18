import App from './App'
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import { act, waitFor } from '@testing-library/react';

jest.mock('axios');

const fc = jest.fn();


describe('tests', () => {

    beforeEach(() => {
        const users = [{name: 'Leanne Graham'}];
        const resp = {data: users};     
        axios.get.mockReturnValue(resp);   
    })

    it('Should call function', () => {   
        const wrapper = shallow(<App myFunction={fc} />);
        wrapper.find('button').simulate('click');
        expect(fc).toHaveBeenCalled();
    })

    it('Should fetch users', async () => {  
        const wrapper = shallow(<App myFunction={fc} />);
        wrapper.find('button').simulate('click');
        await waitFor(() => {                        
            expect(wrapper.find('li')).toHaveLength(1);       
        });                   
    })

    it('Should not be able to find loading span', async () => {  
        const wrapper = shallow(<App myFunction={fc} />);
        await act( async() => {
            wrapper.find('button').simulate('click');
        })        
        expect(wrapper.find('li')).toHaveLength(1);
        expect(wrapper.find('span').text()).toContain('not loading');                         
    })

    it('Should change message to loading when starts to fetch', async () => {  //este só pode ser executado com o waitFor
        const wrapper = shallow(<App myFunction={fc} />);
        wrapper.find('button').simulate('click');
        await waitFor(() => {                                    
            expect(wrapper.find('span').text()).toContain('loading');       
        });
        expect(wrapper.find('span').text()).toContain('not loading');
    })

});