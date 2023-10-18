import Header from './components/header/Header';
import Router from './router/Router';
import Provider from './context/restaurant';

function App() {
    return (
        <Provider>
            <Header />
            <Router />
        </Provider>
    );
}

export default App;