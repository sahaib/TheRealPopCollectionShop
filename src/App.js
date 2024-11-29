import InfiniteScroll from './components/InfiniteScroll';
import ScrollTransition from './components/ScrollTransition';
import IglooModel from './components/IglooModel';

function App() {
  return (
    <div className="app">
      <InfiniteScroll>
        <ScrollTransition>
          <IglooModel />
        </ScrollTransition>
        {/* Add more content sections here */}
      </InfiniteScroll>
    </div>
  );
} 