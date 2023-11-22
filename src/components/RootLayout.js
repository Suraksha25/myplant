import React from 'react'
import NavigationBar from './Navbar/NavigationBar';

import { Outlet } from 'react-router-dom';

function Rootlayout() {
  return (
    <div>
        <NavigationBar/>
        {/*Dynamic content- placeholder*/}
        <div style={{minHeight:"80vh"}}><Outlet/></div>
        
        
    </div>
  )
}

export default Rootlayout;