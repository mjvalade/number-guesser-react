const React = require('react');
// const ReactDOM = require('react-dom');
import { render } from 'react-dom';

import Application from './components/Application.js';

require('./styles');

render(<Application />, document.getElementById('application'));
