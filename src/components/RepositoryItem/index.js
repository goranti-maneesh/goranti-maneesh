// Write your code here

import {Component} from 'react'

import './index.css'

class RepositoryItem extends Component {
  getRepos = () => {
    const {eachRepo} = this.props

    return (
      <li className="repository-item-container">
        <img
          src={eachRepo.avatarUrl}
          alt={eachRepo.name}
          className="avatar-logo"
        />
        <h1 className="repo-name">{eachRepo.name}</h1>
        <div className="public-response-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            className="count-logo"
            alt="stars"
          />
          <p className="response-count">{`${eachRepo.starsCount} stars`}</p>
        </div>
        <div className="public-response-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            className="count-logo"
            alt="forks "
          />
          <p className="response-count">{`${eachRepo.starsCount} forks`}</p>
        </div>
        <div className="public-response-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            className="count-logo"
            alt="open-issues"
          />
          <p className="response-count">{`${eachRepo.starsCount} open issues`}</p>
        </div>
      </li>
    )
  }

  render() {
    return <li className="main-repository-container">{this.getRepos()}</li>
  }
}

export default RepositoryItem
