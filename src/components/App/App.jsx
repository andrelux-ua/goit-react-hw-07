import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import Layout from '../Layout/Layout.jsx';
import css from './App.module.css';

const App = () => {
  return (
    <Layout>
      <div className={css.fixedHeader}>
        <h1
          style={{ marginTop: '2px', marginBottom: '5px', textAlign: 'center' }}
        >
          Phonebook
        </h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </Layout>
  );
};

export default App;
