import React from 'react';
import BookForm from './BookForm.js';
import BookList from './BookList.js';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./App.css"
function App() {
  return (
    <div className="container">
      <Provider store={store} >
      <BookForm />
      <BookList />
      </Provider>
     
    </div>
  );
}

export default App;
