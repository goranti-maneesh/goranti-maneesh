// Write your code here

import {Component} from 'react'

import RepositoryItem from '../RepositoryItem'

import './index.css'

// import RepositoryItem from '../RepositoryItem'

class LanguageFilterItem extends Component {
  render() {
    const {repos} = this.props
    return (
      <div className="main-bg-container">
        <ul className="bg-container">
          {repos.map(eachRepo => (
            <RepositoryItem key={eachRepo.id} eachRepo={eachRepo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default LanguageFilterItem
