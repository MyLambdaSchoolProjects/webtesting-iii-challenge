// Test away
import React from 'react';
import * as testing from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(testing.cleanup);

describe('Dashboard testing', ()=>{
    it('renders controls component', ()=>{
        const wrapper = testing.render(<Dashboard/>);
        const ctrlComponent = wrapper.container.querySelector('.controls.panel');
        expect(ctrlComponent).toBeInTheDocument();
    });
    it('renders the display component',()=>{
        const wrapper = testing.render(<Dashboard/>);
        const display = wrapper.container.querySelector('.display.panel');
        expect(display).toBeInTheDocument();
    })
});