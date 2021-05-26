import React from 'react'
import Header from "./components/Header"
import ImageContainer from "./components/ImageContainer"
import Selector from "./components/Selector"
import Footer from "./components/Footer"


class App extends React.Component {


            state = {
        consoleNames: ["Mastersystem", "Mastersystem II", "Mega Drive"]
    };


    render () {
    return (
        <main>
            <Header />
            <ImageContainer />
            <ul>
                {this.state.consoleNames.map((name, index) => {
                    return <Selector key={index} name={name} />
                })}
            </ul>
            <Footer />
        </main>
    )

}
}

export default App

