import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './component/AppWrapper/AppWrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
