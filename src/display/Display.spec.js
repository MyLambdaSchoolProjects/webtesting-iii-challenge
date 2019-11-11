//Test
import React from 'react';
import * as testing from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(testing.cleanup);

describe('Display testing',()=>{
    it('Shows "open" & "unlocked" buttons', ()=>{
        const wrapper = testing.render(<Display/>);
        expect(wrapper.queryByText('Open')).toBeTruthy();
        expect(wrapper.queryByText('Unlocked')).toBeTruthy();
    });
    it('shows state of Locked and Closed',()=>{
        const wrapperT = testing.render(<Display locked={true} closed={true}/>);
        expect(wrapperT.queryByText('Locked')).toBeTruthy();
        expect(wrapperT.queryByText('Closed')).toBeTruthy();
    });
    it('shows state of led defaults',()=>{
        const wrapper = testing.render(<Display/>);
        expect(wrapper.getByTestId('locked-state')).toHaveClass('green-led');
        expect(wrapper.getByTestId('open-state')).toHaveClass('green-led');
    });
});