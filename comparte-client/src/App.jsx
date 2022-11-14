import React from 'react';

// IMPORTAMOS LOS COMPONENTES

import classes from './App.module.scss';

import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';

import Body from './components/Body/Body';

function App() {
  return (
    <div className={classes["App"]} >
      { /* HEADER */}
      <Header />

      { /* MAIN > Los hijos son reemplazables */}
      <main>
        <Body />
      </main>

      { /* FOOTER */}
      <Footer />
    </div>
  )
}

export default App;