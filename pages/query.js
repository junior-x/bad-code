import React from 'react'
import { useMediaQuery } from 'react-responsive'

export default function queryTest() {

    const Example = () => {
      const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

    
      return (<div>
        <h1>Device Test!</h1>
        {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      </div>)
    }
    return null;
};