# React Sentinel - 0.1.6

<a href="./package.json">
  <img src="https://img.shields.io/npm/v/react-sentinel.svg?maxAge=3600&label=react-sentinel&colorB=007ec6">
</a>
<a href="https://travis-ci.org/YurkaninRyan/react-sentinel">
  <img src="https://travis-ci.org/YurkaninRyan/react-sentinel.svg?branch=master">
</a>
<a href="./License.md">
  <img src="https://img.shields.io/npm/l/slate.svg?maxAge=3600">
</a>
<br/>

`<Sentinel>` is a component that abstracts away the recursive looping of `requestAnimationFrame` and `requestIdleCallback` to allow developers to efficently observe the dom and make changes to state accordingly.

Take for example the common usecase of element queries.  In CSS Media Queries are only so useful because they monitor only the size of the page, but what if you wanted to monitor only an element?

# Example

```jsx
import React, { PureComponent, } from "react";
import Sentinel from "react-sentinel";
import DumbCard from "./DumbCard"

class ResponsiveTextCard extends PureComponent {
  getSize = () => {
    if (this.container.offSetWidth < 450) return { size: "small" }
    if (this.container.offsetWidth < 950) return { size: "medium" }

    return { size: "large" }
  }

  renderCard = ({ size, }) => <DumbCard size={size}>Hello!</DumbCard>
  render() {
    return (
      <div className="centered-and-half-of-page" ref={(el) => this.container = el}>
        <Sentinel observe={this.getSize} render={this.renderCard} />
      <div>
    )
  }
}
```

In this simple example, you can design a dumb card that takes a size property, and do whatever you want based off what gets passed into it.  Then with Sentinel, you can intelligently figure out when that prop needs to be changed!

# Props
`render` - A function that returns JSX.  It get's passed in Sentinel's state, which is just whatever object you return in the `observe` function.

`observe` - You're chance to update Sentinel's state.  Attempts to run once every 15ms.  Returning a shallowly equal object doesn't cause a re-render.

`lowPriority` - Defaults to false.  If set to `true` it switches from using `requestAnimationFrame` to using `requestIdleCallback`.  For browsers that don't support `requestIdleCallback` this is basically a no-op.

# Contributing
First run `yarn` to install the project's dependencies.  Here are a list of commands for different scenarios.

### I want to fix an issue, or add a feature what do I do?
1. Fork the project!
2. Make your branch with `git flow feature start <NAME_OF_FEATURE>`
3. Spin up the example using `yarn develop`
4. When you're all done, run `yarn test && yarn lint`
5. Open a PR!
