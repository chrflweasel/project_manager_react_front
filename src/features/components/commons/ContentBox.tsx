import React, {useEffect, useState} from 'react'

export const ContentBox = ({children}: ContentBoxTypes) => {
    const [menuHeight, setMenuHeight] = useState(0)

    // the method updates the height of the component
    // based on the height of the top menu
    useEffect(() => {
        // find the top menu in the document by id
        const topMenu = document.getElementById('topMenuHeader')

        // the function takes the new height of the top menu and writes to the state
        const updateHeight = () => {
            const topMenuHeight = topMenu?.getBoundingClientRect().height
            if (topMenuHeight) setMenuHeight(topMenuHeight)
        }

        // updating the height for the first time
        updateHeight()

        // preparing a variable for the observer
        let resizeObserver : ResizeObserver|null = null;

        if (topMenu) {
            // initialize the class for tracking the resizing of the top menu
            // if the top menu was found
            resizeObserver = new ResizeObserver(updateHeight)
            // start tracking
            resizeObserver.observe(topMenu)
        }

        // add a window resize listener
        window.addEventListener('resize', updateHeight)

        return () => {
            // disconnect observer when component will unmount
            resizeObserver?.disconnect()
            // remove the window resize listener when component will unmount
            window.removeEventListener('resize', updateHeight)
        }
    }, [])

    return <div style={{height: `calc(100vh - ${menuHeight}px)`, overflow: 'hidden'}}>
        {children}
    </div>
}

interface ContentBoxTypes {
    children: React.ReactNode
}