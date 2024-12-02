import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Naelem Souza" 
        conte
        nt="lorem ipsum dolor sit amet" 
      />
    </div>
  )
}

