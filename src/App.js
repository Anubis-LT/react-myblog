import "./assets/css/App.css";
import Header from "./Header";
import NavigationMenu from "./Nav/NavigationMenu";
import Content from "./Content";
import Footer from "./Footer";

function App() {
   return (
      <>
         <body>
            <Header />
            <NavigationMenu />
            <Content />
            <Footer />
         </body>
      </>
   );
}

export default App;
