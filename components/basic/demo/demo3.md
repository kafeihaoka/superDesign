---
order: 3
title: 
  zh-CN: 第三个 demo
  en-US: the third demo
---

## zh-CN
第三个 demo。

## en-US
the third demo.

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
