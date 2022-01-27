import React from 'react'
class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <header className="header">
            <style>
              /*imports poppins font from google*/
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
            </style>
              <div className="logo" />
              <span className="title">Chipchat</span>
            </header>
        )
    }
}

export default Header