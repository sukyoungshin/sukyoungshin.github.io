import React from 'react';
// Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Project from './pages/Project';
import ImgModal from './components/ImgModal';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
// STYLE
import { GlobalStyle } from './Styled';

const App = () => {

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="project" element={<Project />} />
          <Route path=":img/:id" element={<ImgModal />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
