import { Home, Zupy, Potrawy, Deser, Glowne, Przystawki, Konto, Panel } from './components/view';
import { MainLayout } from './components/layout';
import { Route, Switch } from 'react-router-dom';
import 'normalize.css';
import './styles/global.scss';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/zupy" component={Zupy} />
        <Route exact path="/zupy/:name" component={Potrawy} />
        <Route exact path="/dania" component={Glowne} />
        <Route exact path="/dania/:name" component={Potrawy} />
        <Route exact path='/desery' component={Deser} />
        <Route exact path='/desery/:name' component={Potrawy} />
        <Route exact path='/przystawki' component={Przystawki} />
        <Route exact path='/przystawki/:name' component={Potrawy} />
        <Route exact path='/konto' component={Konto} />
        <Route exact path='/panel' component={Panel} />

        <Route exact path='*' component={Home} />
      </Switch>

    </MainLayout>
  );
}

export default App;
