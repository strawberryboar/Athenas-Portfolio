import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Homepage from './pages/Homepage.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Contact from './pages/Contact.js';
import Socials from './pages/Socials.js';

function App() {
  
  const httpLink = createHttpLink({
    uri: "/graphql"
  });

  const authLink = setContext((_, {headers }) => {
    const token = localStorage.getItem("id_token");

    return {
      headers: {
        ...headers,
        authorization: token ? 'Bearer ${token}' : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <>
    <Router>
      <ApolloProvider client={client}>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/socials' element={<Socials/>}/>
      </Routes>
      <Footer />
      </ApolloProvider>
    </Router>
    </>
  );
}

export default App;
