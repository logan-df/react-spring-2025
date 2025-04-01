import './css/Home.css';
import Tree from '../components/Tree';
import SlideShow from '../components/SlideShow';
function App() {
  return (
    <>
      <SlideShow />
      <section className="columns">
        <Tree 
          name="Live Oak"
          description="Doesn't lose it's leaves"
          image="images/live-oak.jpeg"/>
        <Tree 
          name="Dogwood"
          description="Flowers in spring"
          image="images/dogwood.jpeg" />
      </section>
    </>
  );
}

export default App;
