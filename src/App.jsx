import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/GalleryHeader';
import GalleryBody from './components/GalleryBody';
import data from './components/Data.jsx';

 

function App() {
  return (
    <div>
      <GalleryHeader/>

      <GalleryBody lake = {data}/>


      {/* adding footer component */}
      <GallaryFooter name={'Abhinandan'}/> 
    </div>
  )
}

export default App;
