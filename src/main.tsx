import { render } from 'preact'
import { Home } from './home.tsx'
import { Portfolio } from './portfolio.tsx'
import { Contact } from './contact.tsx'
import { Blog } from './blog/index.tsx'
import { Post } from './blog/post.tsx'
import { NotFound } from './notfound.tsx'

import { Router, Route } from 'preact-router';


import './index.css'


// This file controls all of the routing
const Main = () => (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={Post} />
      <Route path="*" component={NotFound} />
    </Router>
  );

render(<Main />, document.getElementById('main')!)
