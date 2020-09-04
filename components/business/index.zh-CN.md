---
order: 1
title: 
  zh-CN: 业务组件
  en-US: business
---

适合特定业务逻辑而创造的组件，以便于有类似业务逻辑功能需求时可快速创建；具体参数请参见 [API](/api/business)

## 何时使用

- 有类似功能需求时可使用；

---

## 拖拽块组件 react-dnd-block

## 怎么使用

### 安装

```bash
$ npm i react-dnd-block -S
```

### 使用

```jsx
import React from "react";
import ReactDOM from "react-dom";
import DNDBlock from "react-dnd-block";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data:Array.from({length:30}).map((v,i) => ({label:'item' + i,value:i}))
		}
	}

    changeBlock = (v) => {
        console.log(v)
        this.setState({
            data: v
        })
    }

	render() {
	    const { data } = this.state;
		return (
            <div>
				<p>-----------------------  例1  -------------------------------</p>
				<DNDBlock
					data={data}
					onChange={this.changeBlock}
				/>
				<p>-----------------------  例2  -------------------------------</p>
				<DNDBlock
					width={'80%'}
					data={data}
					tagBorderRadius={['6px','6px']}
					clearButtonBorderRadius={'6px'}
					tagColor={'rgb(16, 142, 233)'}
					onChange={this.changeBlock}
				/>
				<p>------------------------  例3  ------------------------------</p>
				<DNDBlock
					width={'360px'}
					data={data}
					title={''}
					hint={''}
					tagBorderRadius={['6px','6px']}
					clearButtonBorderRadius={'6px'}
					tagColor={'rgb(16, 233, 173)'}
					onChange={this.changeBlock}
				/>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("example"));
```
> [查看详细使用](https://github.com/kafeihaoka/react-dnd-block)

## API

### props 

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | 设置组件数据 | array | - |
| width | 设置拖拽区域宽度 | string | 100% |
| className | 增加拖拽区域自定义class | string | '' |
| title | 拖拽区域label文字 | string | 已选 |
| tagColor | 拖拽区域标签颜色自定义 | string | '#fd9f2f' |
| tagBorderRadius | 拖拽区域标签自定义圆角 | array | ['0px', '0px'] |
| clearButtonBorderRadius | 拖拽区域清空标签自定义圆角 | string | '0px' |
| clearButton | 是否开启全部清除按键 | bool | true |
| hint | 拖拽区域底部提示段落 | string | '可随意拖拽改变标签顺序' |
| onChange | 拖拽排序及删除操作 | function(e){} | - |

> [查看demo](https://kafeihaoka.github.io/react-dnd-block/)
