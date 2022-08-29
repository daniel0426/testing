import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from 'Root'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="post" element={<CommentBox />} />
          <Route path="/" index element={<CommentList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
)