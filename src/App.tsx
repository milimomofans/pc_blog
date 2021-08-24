import './App.css';
import {Header} from 'components/header/index'
import {BlogHome} from 'screens/home'
import ReactLive2d from 'react-live2d'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <BlogHome />
      <ReactLive2d
        width={300}
        height={500}
        bottom={0}
        left={5}
        right={0}
        ModelList={['lafei_4']}
        MobileShow={false}
        color={'rgba(255,255,255,0.8)'}
        TouchBody={['不要乱摸了啦','你的手在摸哪里！','哼,坏人']}
        TouchHead={['HENTAI！','不可以这样欺负我','再摸我报警了！']}
        TouchDefault={['欢迎来到MIO酱的博客']}
      ></ReactLive2d>
    </div>
  );
}

export default App;
