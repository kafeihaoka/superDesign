---
order: 0
title: 
  zh-CN: 第一个 demo
  en-US: the first demo
---

## zh-CN
第一个 demo。

## en-US
the first demo.

```jsx
class Test extends React.Component{
  constructor() {
    super(...arguments);
  }
  
  render(){
    return (
      <div className="code-box-demo-wrapper">
        这是一个例子～
      </div>
    );
  }
}
ReactDOM.render(<Test />, mountNode);
```
