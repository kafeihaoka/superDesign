---
order: 1
title: 
  zh-CN: 第二个 demo
  en-US: the second demo
---

## zh-CN
第二个 demo。

## en-US
the second demo.

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
