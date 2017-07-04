import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

const TAB_CLASS = 'sui-StudioTabs-tab'
const LINK_CLASS = 'sui-StudioTabs-link'
const ACTIVE_CLASS = LINK_CLASS + '--active'

export default class Workbench extends Component {
  render () {
    const {category, component} = this.props.params

    const Tab = ({ name, path }) => (
      <li className={TAB_CLASS}>
        <Link to={`/workbench/${category}/${component}/${path}`} className={LINK_CLASS} activeClassName={ACTIVE_CLASS} >{name}</Link>
      </li>
    )

    return (
      <div className='sui-StudioWorkbench'>
        <nav className='sui-StudioWorkbench-navigation'>
          <ul className='sui-StudioTabs'>
            <Tab name='Demo' path='demo' />
            <Tab name='Api' path='documentation/api' />
            <Tab name='Readme' path='documentation/readme' />
            { /* TODO: https://github.com/SUI-Components/SUIStudio/issues/51 <Tab name='Tests' path='tests' /> */ }
          </ul>
        </nav>
        <div className='sui-StudioWorkbench-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Workbench.propTypes = {
  children: PropTypes.element,
  params: PropTypes.shape({
    category: PropTypes.string,
    component: PropTypes.string
  })
}