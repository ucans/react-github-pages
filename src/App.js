import logo from './logo.svg';
import './App.css';
const topics = [
  { id: 1, title: 'html', body: 'html is...' },
  { id: 2, title: 'css', body: 'css is...' },
  { id: 3, title: 'javascript', body: 'javascript is...' },
  { id: 4, title: 'C', body: 'javascript is...' },
  { id: 5, title: 'Java', body: 'javascript is...' },
];

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{props.title}</h1>
      <p>I wanna be <code className='full-stack'>full-stack-developer</code></p>
      <p>
        Let's <a onClick={(event) => {event.preventDefault(); props.onChangeMode();}}> 
        🔥BURN🔥</a> together</p>
    </header>
  );
}

function List(props){
  const lis = [];
  props.topics.map((topic) =>
    lis.push(
      <li key={topic.id}><a className='App-link'>{topic.title}</a></li>)
  );
  return (
      <ul>{lis}</ul>
  );
}

function Main() {
  return (
    <main role="main" className='App-main'>
      <Article title="I Want.." body="Fun projects"></Article>
      <Article title="Skills.." body="Server" addList='True'></Article>
      <Article title="Favorite.." body="☕"></Article>
    </main>
  );
}

function Article(props) {
  if(props.addList) return(
    <article>
      <h2>{props.title}</h2>
      <List topics={topics}></List>
    </article>
  )
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>Author : Suyeon Chung</p>
        <a href="https://github.com/ucans">
          <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='github-logo' alt='github-logo'></img></a>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header
        title="Hi, I'm Suyeon👋"
        onChangeMode={() => {
          alert('🔥🔥🔥');
        }}
      ></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
