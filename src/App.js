import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, About, Experience, Project, ImgModal, Contact, NoMatch } from './pages/index';
import { Layout } from './components/index';
import { GlobalStyle } from './styles/globalStyle';

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