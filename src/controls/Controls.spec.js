// Test away!
import React from 'react';
import * as testing from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

afterEach(testing.cleanup);

describe('Controls testing',()=>{
    it('render "lock" and "close" buttons ',()=>{
        const wrapper = testing.render(<Controls/>);
        expect(wrapper.queryByText('Lock Gate')).toBeTruthy();
        expect(wrapper.queryByText('Close Gate')).toBeTruthy();
    });

    it('render "unlock" and "open" buttons',()=>{
        const wrapperT = testing.render(<Controls locked={true} closed={true}/>);
        expect(wrapperT.queryByText('Unlock Gate')).toBeTruthy();
        expect(wrapperT.queryByText('Open Gate')).toBeTruthy();
    });

    it('disable "lock gate" if "gate open"',()=>{
        const wrapperF = testing.render(<Controls locked={false} closed={false}/>);
        expect(wrapperF.getByTestId('lock-unlock-btn')).toBeDisabled();
    });

    it('disable "open gate" if gate is locked',()=>{
        const wrapperT = testing.render(<Controls locked={true} closed={true}/>);
        expect(wrapperT.getByTestId('open-close-btn')).toBeDisabled();
    });
    
});