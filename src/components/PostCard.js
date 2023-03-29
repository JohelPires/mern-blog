import React from 'react'

function PostCard() {
  return (
    <div className='post'>
      <div className='image'>
        <img
          src='https://techcrunch.com/wp-content/uploads/2023/03/cooler-master-mainboard-case-02.jpg'
          alt=''
          srcset=''
        />
      </div>
      <div className='texts'>
        <h2>
          Framework refines its laptops and adds a cute way to reuse old parts
        </h2>
        <p className='info'>
          <a href='' className='author'>
            Johel Pires
          </a>
          <time>2023-03-27 11:00</time>
        </p>
        <p className='summary'>
          Framework is one of a few companies leading the charge against
          disposable electronics, in particular laptops. It just showed off some
          new models, but also a unique case that you can slot your old parts
          into to form a new (old) desktop or home media PC.
        </p>
      </div>
    </div>
  )
}

export default PostCard
