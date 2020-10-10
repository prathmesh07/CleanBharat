import React from 'react'
import Header from "../components/Header"
import Hero from "../components/Hero"
import Video from "../components/Video"
import Buttonss from "../components/Buttonss"
import Footer from "../components/Footer"


export default function Home() {
    return (
        <div className="vii">
            <Header />
            <Hero/>
            <br /><br />
            <Video />
            <Buttonss />
            <Footer />
        </div>
    )
}
