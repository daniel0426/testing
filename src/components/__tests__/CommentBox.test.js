import React from 'react'
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root'

let wrapped;

beforeEach(()=> {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

//cleanup 
afterEach(()=> {
  wrapped.unmount();
})

it('has a text area and a two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(2)
})


describe('the text area', ()=> {
  beforeEach(()=> {
    wrapped.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    })

   wrapped.update();
  })

//simulating textarea change event
    it('has a text area that users can type in', ()=> {
    
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  })

//simulate the form sumbit
  it('when form is submitted, textarea gets emptied', ()=> {
   
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })

})
