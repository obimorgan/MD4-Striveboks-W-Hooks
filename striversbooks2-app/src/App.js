import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import BookList from './Components/BookList'
import MyWarning from './Components/MyWarning'
import AddComments from './Components/AddComments'
import SingleComment from './Components/SingleComment'




function App() {
  return (
    <div>
      <MyNavbar 
      brand="Strivers-Books"
      homelink="Home"
      aboutlink="About"
      browselink="browse"
      />

      <Welcome />
      {/* <MyWarning /> */}
      <div className="d-flex">
      <BookList />


      {/* <CommentColumn /> */}

      </div>
      
      
      <Footer />
    </div>
  )
}

export default App
