import React from 'react';
// Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, About, Experience, Project, ImgModal, Contact, NoMatch } from './pages'
import { Layout } from './components/index';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
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
