import React from 'react';
import ReactDOM from 'react-dom';
import DragAndDropQuestion from './DragAndDropQuestion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DragAndDropQuestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});