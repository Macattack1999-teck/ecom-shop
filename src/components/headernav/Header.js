import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { headerLinks } = this.props
    return (
      <div className="header">
        <img className="header__img" src="https://via.placeholder.com/50x50" />
        <div className='header__links'>
          {
            headerLinks.map(link => {
              return  (
                <a className='header__link' key={link._id} onClick={() => console.log('trying to switch tabs')}>
                  {link}
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { headerLinks } = state.headerNavbar
  return {
    headerLinks
  }
}

export default connect(mapStateToProps)(Header)