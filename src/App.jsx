import Header from "./components/Header/Header"
import EducationSection from "./components/EducationSection/EducationSection"
import TabsSection from "./components/TabsSection/TabsSection"
import RouterSection from "./components/RouterSection/RouterSection"
import FeedbackSection from "./components/FeedbackSection/FeedbackSection"
import { useState } from "react"

function App() {
  const [pageType, setPageType] = useState('feedback');
  

  return (
    <>
      <Header />
      <RouterSection active={ pageType } onChange={(current) => setPageType(current) } />
      

      { pageType === 'feedback' ? 
      <>
        <FeedbackSection  />
      </> 
      : 
      <>
      <EducationSection />
      <TabsSection />
      </> 
      }
      
      
    </>
  )
}

export default App