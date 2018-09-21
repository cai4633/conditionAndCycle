// export {appData } ;

// module.exports= {appData: appData }
var appData= {
	app1: {
		data: {
			items:[ {
				name: '张三三', status:'合格', operation:'删除', show:true
			},

			{
				name: '李四', status:'不合格', operation:'删除', show:true
			},

			{
				name: '王五', status:'待审核', operation:'审核', show:true
			},

			{
				name: '赵六', status:'待审核', operation:'审核', show:true
			},

			{
				name: '孙七', status:'待审核', operation:'审核', show:true
			}

			]
		}

	},

	
	app5:{
		data:{
			items1:[{caption:'第一章',isActive:true,content:'在很多情况下，Vue 可以自动得出过渡效果的完成时机。默认情况下，Vue 会等待其在过渡效果的根元素的第一个 transitionend 或 animationend 事件。然而也可以不这样设定——比如，我们可以拥有一个精心编排的一系列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。'},
					{caption:'第二章',isActive:false,content:'不同于 <transition>，它会以一个真实元素呈现：默认为一个 <span>。你也可以通过 tag 特性更换为其他元素。 过渡模式不可用，因为我们不再相互切换特有的元素。 内部元素 总是需要 提供唯一的 key 属性值。'}, 
					{caption:'第三章',isActive:false,content:'<transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 v-move 特性，它会在元素的改变定位的过程中应用。像之前的类名一样，可以通过 name 属性来自定义前缀，也可以通过 move-class 属性手动设置。'},
					{caption:'第四章',isActive:false,content:'这个看起来很神奇，内部的实现，Vue 使用了一个叫 FLIP 简单的动画队列 使用 transforms 将元素从之前的位置平滑过渡新的位置。 我们将之前实现的例子和这个技术结合，使我们列表的一切变动都会有动画过渡。'} 
					],
			items2:[1,2,3,4,5,6,7,8,9],
			show:true,
			}
	},
	app6:{
		data:[{
				    value: 'zhinan',
				    label: '指南',
				    children: [{
				        value: 'shejiyuanze',
				        label: '设计原则',
				        children: [{
				            value: 'yizhi',
				            label: '一致'
				        }, {
				            value: 'fankui',
				            label: '反馈'
				        }, {
				            value: 'xiaolv',
				            label: '效率'
				        }, {
				            value: 'kekong',
				            label: '可控'
				        }]
				    }, {
				        value: 'daohang',
				        label: '导航',
				        children: [{
				            value: 'cexiangdaohang',
				            label: '侧向导航'
				        }, {
				            value: 'dingbudaohang',
				            label: '顶部导航'
				        }]
				    }]
				},  {
				    value: 'ziyuan',
				    label: '资源',
				    children: [{
				        value: 'axure',
				        label: 'Axure Components'
				    }, {
				        value: 'sketch',
				        label: 'Sketch Templates'
				    }, {
				        value: 'jiaohu',
				        label: '组件交互文档'
				    }]
				}]
	}



}
