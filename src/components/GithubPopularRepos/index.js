import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {reposList: 'ALL', repos: [], loadingState: true}

  componentDidMount = () => {
    this.changeReposList('ALL')
  }

  changeReposList = async id => {
    this.setState({loadingState: true, reposList: id})

    const popularRepos = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${id}`,
    )
    const data = await popularRepos.json()
    // console.log(data)
    const modifiedRepos = data.popular_repos.map(eachRepo => ({
      avatarUrl: eachRepo.avatar_url,
      forksCount: eachRepo.forks_count,
      id: eachRepo.id,
      issues: eachRepo.issues_count,
      name: eachRepo.name,
      starsCount: eachRepo.stars_count,
    }))
    // console.log(id)

    this.setState({
      repos: modifiedRepos,
      loadingState: false,
    })
  }

  render() {
    const {reposList, repos, loadingState} = this.state
    return (
      <div className="language-filter-item-container">
        <h1 className="popular-title">Popular</h1>
        <ul className="ul-element">
          {languageFiltersData.map(eachData => (
            <li
              id={eachData.id}
              key={eachData.id}
              className="li-element"
              onClick={() => this.changeReposList(eachData.id)}
            >
              <button
                type="button"
                className={
                  reposList === eachData.id
                    ? 'button-ele selected-button-element'
                    : 'button-ele'
                }
              >
                {eachData.language}
              </button>
            </li>
          ))}
        </ul>
        {loadingState ? (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <LanguageFilterItem id={reposList} repos={repos} />
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
