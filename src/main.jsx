import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/main.css'
import CommitteeList from './committeeCards'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommitteeList />
  </React.StrictMode>
)
