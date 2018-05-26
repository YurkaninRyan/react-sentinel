# React Sentinel - 0.2.0

<a href="./package.json">
  <img src="https://img.shields.io/npm/v/react-sentinel.svg?maxAge=3600&label=react-sentinel&colorB=007ec6">
</a>
<a href="https://travis-ci.org/YurkaninRyan/react-sentinel">
  <img src="https://travis-ci.org/YurkaninRyan/react-sentinel.svg?branch=master">
</a>
<a href="https://unpkg.com/react-sentinel@0.1.8/dist/react-sentinel.browser.js">
  <img src="http://img.badgesize.io/https://unpkg.com/react-sentinel@0.1.8/dist/react-sentinel.browser.js?compression=gzip&amp;label=react--sentinel">
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

`observe` - Your chance to update Sentinel's state.  Attempts to run once every 15ms.  Returning a shallowly equal object doesn't cause a re-render. In here you recieve the previous return value, so you can do incremental updates.

`lowPriority` - Defaults to false.  If set to `true` it switches from using `requestAnimationFrame` to using `requestIdleCallback`.  For browsers that don't support `requestIdleCallback` this is basically a no-op.

`initial` - Defaults to an empty object.  This is what the first value of Sentinel should be.

`interval` - Defaults to being instant. Determines the time between observe checks.  Use this if you don't think you will be updating often and want to increase performance.

# Instance Functions
If you want finer control over when the polling should actually be happening, you can use some function exposed on each Sentinel Instance by adding a ref to each one.  Once you have the ref, you can use the following functions:

`Sentinel.watch` - Begins polling <br>
`Sentinel.stop` - Stops polling

# Similar Alternatives
* [eq.js](https://github.com/snugug/eq.js) - Designed to solve purely the element query problem. Allows you to set data properties for the sizes, and read from an attribute to see the current size.

* [react-element-query](https://github.com/joeybaker/react-element-query) - Designed to solve purely the element query problem.  You supply sizes and it allows you to make class names out of them.

* [CSS Element Queries](https://github.com/marcj/css-element-queries) Designed to solve purely the element query problem.  Allows you to write element queries directly into your css!

If you know of any other libraries that are similar to this one, feel free to submit a PR!  

# Contributing
First run `yarn` to install the project's dependencies.  Here are a list of commands for different scenarios.

### I want to fix an issue, or add a feature what do I do?
1. Fork the project!
2. Make your branch with `git flow feature start <NAME_OF_FEATURE>`
3. Spin up the example using `yarn develop`
4. When you're all done, run `yarn test && yarn lint`
5. Open a PR!
