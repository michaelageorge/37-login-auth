import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import Form from '../components/cms/record';
import Adapter from 'enzyme-adapter-react-16';



describe('form should render some thing', ()=>{
    it('should run a text',()=>{

        let component = shallow(<Form/>);

        expect(component.find('button').exists()).toBeTruthy();

    })
})