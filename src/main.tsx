import { render } from 'preact'
import { Home } from './home.tsx'
import { Portfolio } from './portfolio.tsx'
import { Contact } from './contact.tsx'
import { Blog } from './blog'
import { NotFound } from './notfound.tsx'

import { Router, Route } from 'preact-router';

import './index.css'

const Main = () => (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog/:id?" component={Blog} />
      <Route path="/*" component={NotFound} />
    </Router>
  );

render(<Main />, document.getElementById('main')!)
