import {Switch,Route} from 'react-router-dom'
import {Home} from '../components/Home'
import {About} from '../components/About'
import {Contact} from '../components/Contact'

export function Content(props) {
    return (
        <main class="content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
    )
}

export default Content