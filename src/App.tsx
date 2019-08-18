import * as React from 'react';
import { render } from 'react-dom';
import BuildUtil from './util/BuildUtil';

import './styles/app.scss';
import SearchApp from './components/SearchApp';

render(<SearchApp />, document.getElementById('main'));