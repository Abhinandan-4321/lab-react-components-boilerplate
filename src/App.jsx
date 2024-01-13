import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/GalleryHeader';
import GalleryBody from './components/GalleryBody';


 

function App(props) {
  const Data=props.lake
  return (
    <div>
      <GalleryHeader/>

      <GalleryBody lake = {Data}/>


      {/* adding footer component */}
      <GallaryFooter name={'Abhinandan'}/> 
    </div>
  )
}

export default App;
