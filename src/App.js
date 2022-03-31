import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
import Countries from './components/Countries/Countries';
import ShowCountry from './components/ShowCountry/ShowCountry';
import Meals from './components/Meals/Meals';
import Meal from './components/Meal/Meal';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friend/:friendId" element={<FriendDetail />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=':postId' element={<PostDetail />} />
        </Route>
        <Route path="/countries" element={<Countries />} />
        <Route path="/showCountry/:countryName" element={<ShowCountry />} />
        <Route path="/meals" element={<Meals />}>
          <Route path=':mealId' element={<Meal />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
