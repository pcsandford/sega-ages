import React from 'react'
import "./assets/style.css"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import consoles from "./data"

console.log("Hi, this is my first attempt at building something with ⚛️ React Hooks so if you see something messed up please let me know! Thank you! 😊")


const App = () => {

    return (
        <main>
            <section className="wrapper">
                <Header 
                    titleLeft="SEGA" 
                    titleRight="AGES" 
                    subtitle="SEGA consoles through the years" 
                />
                <Content 
                    consoles={consoles}
                />
            </section>
            <Footer 
                disclaimer="All console names &trade; SEGA GAMES CO., LTD. and SEGA CORPORATION" 
                builtBy="Made with nostalgic 💙 by"
                link="http://www.cameroncodes.com"
            />
            
        </main>
    )

}


export default App

