import { renderToString } from 'react-dom/server';
import Home from '../src/pages/home';

process.stdout.write(renderToString(<Home />));
