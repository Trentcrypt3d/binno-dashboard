import './App.css' 
import BlogCards from './components/blog/blogCards'
import EventCards from './components/events/eventCards'
import SideBar from './components/sidebar/SideBar'
import Header from './components/header/Header'
import NewEntryModal from './components/newEntryModal/newEntryModal'
import NewEventModal from './components/newEventModal/newEventModal'
import SortContent from './components/sortFunction/sortContent'

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import { dashboard } from './pages/dashboard/dashboard'

function App() {
  return (
    <>
    {/* <Router> */}
    <div className='App'>
      <SideBar />
      <div className='layoutContainer'>
        <div className="Headline">
          <Header />
          <div className="contentType">
            <div className="blogTitleContainer">
              <h1 className='title'>Blogs</h1>
                <div className="createEntryButton">
                  <NewEntryModal />
                </div>
            </div>

            <div className="eventTitleContainer">
              <h1 className='title'>Events</h1>
                <div className="createEventButton">
                  <NewEventModal />
                </div>
            </div>
            
          </div>
          
            <div className="contents">
              {/* <Switch>
                <Route exact path='/' Component={dashboard}/>
              </Switch> */}
              <div className="blogContentsContainer">
                <BlogCards />
              </div>
              <div className="eventContentsContainer">
                  <div className="eventSortButton">
                    <SortContent/>
                  </div>
                  <EventCards />
              </div>
            </div>
          </div>
        </div>        
      </div>
      {/* </Router> */}
    </>
  )
}

export default App
