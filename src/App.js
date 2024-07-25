
import 'semantic-ui-css/semantic.min.css'
import "./App.css"


import MenuBar from './components/NavBar';
import CodeForChange from './components/CodeforChange';
import Tracks from './components/Tracks';
import QnA from './components/QnA';
import Sponsors from './components/Sponsors';


import background from "./components/media/bg.png"
function App() {
  return (
    <div className="bg" style={{ backgroundImage: `url(${background})` }}>
      <MenuBar/>
      <CodeForChange/>
      <Tracks/>
      <QnA/>
      <Sponsors/>
    </div>
  );
}

export default App;
