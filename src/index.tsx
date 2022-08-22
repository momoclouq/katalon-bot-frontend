import App from './App';
import { render } from 'react-dom';
import { StyleSheetManager } from 'styled-components';

const host = document.querySelector("#katalonChatbot");

const shadow = host.attachShadow({ mode: 'open' });
// create a slot where we will attach the StyleSheetManager
const styleSlot = document.createElement('section');
// append the styleSlot inside the shadow
shadow.appendChild(styleSlot);
// create the element where we would render our app
const renderIn = document.createElement('div');
// append the renderIn element inside the shadow
shadow.appendChild(renderIn);

render(
  <StyleSheetManager target={styleSlot}>
    <App />
  </StyleSheetManager>,
  renderIn
);
