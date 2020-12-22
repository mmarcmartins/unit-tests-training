import DumbApp from './DumbApp';
import React from 'react';
import ReactDOM from 'react-dom';
import { act, waitFor } from '@testing-library/react';

it("should render 1", () => {
    const el = document.createElement("div");
    act(() => {
        ReactDOM.render(<DumbApp />, el);        
    })
    expect(el.innerHTML).toBe("1");
});