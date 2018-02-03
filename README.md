# React Sentinel - 0.1.2

`<Sentinel>` is a component that abstracts away the recursive looping of `requestAnimationFrame` and `requestIdleCallback` to allow developers to efficently observe the dom and make changes to state accordingly.

Take for example the common usecase of element queries.  In CSS Media Queries are only so useful because they monitor only the size of the page, but what if you wanted to monitor only an element?

```jsx
import React, { PureComponent, } from "react";
import Sentinel from "react-sentinel";
import DumbCard from "./DumbCard"

class ResponsiveTextCard extends PureComponent {
  this.getSize = () => {
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
