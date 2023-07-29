import React from 'react'
import ReactDOM from 'react-dom/client'

import HeroPanel from './heroPanel'
import Initiative from './initiative'
import WhatWeDo from './infoCards'
import UniAffiliation from './uniAffiliation'

const HeroPage = (props) => {
    return (
        <div>
            <HeroPanel />
            <Initiative />
            <WhatWeDo />
            <UniAffiliation />
        </div>
    )
}

export default HeroPage;