import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from './components/NavBar';
import CodeForChange from './components/CodeforChange';
import Tracks from './components/Tracks';
import QnA from './components/QnA';
import Sponsors from './components/Sponsors';



function App() {
  return (
    <div className="bg">
      <MenuBar />
      <div id="codeforchange"><CodeForChange /></div>
      <div id="tracks"><Tracks /></div>
      <div id="qna"><QnA /></div>
      <div id="sponsors"><Sponsors /></div>
    </div>
  );
}

export default App;
