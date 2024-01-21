import React from 'react'
import HeroPanel from './heroPanel'
import Initiative from './initiative'
import WhatWeDo from './infoCards'
import UniAffiliation from './uniAffiliation'
import JoinUs from './joinUs'

const HeroPage = (props) => {
    return (
        <div>
            <HeroPanel />
            <Initiative />
            <WhatWeDo />
            <UniAffiliation />
            <JoinUs />
        </div>
    )
}

export default HeroPage;