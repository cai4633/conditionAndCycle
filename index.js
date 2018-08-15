// import Vue from 'vue';
// import {appData} from './data.js';
// var appData=require("./data.js").appData;
// console.log(appData)
var sonComponent={
	data:function(){
		return {
		}
	},
	props:['value'],
	template:`<div id="container"><input type="text" id="son" :value="value"  @input="$emit('input',$event.target.value)" ><button  @click=" $emit('show') && $parent.$emit('show')">通知父组件</button></div>`/*通过$parent来跨层发射事件*/
},

	fatherComponent={
		data:function(){
			return{text:'',
					activeColor:'',
					showText:'静静的等待用户输入'
					}
				},
		methods:{
			showSomething:function(){
				this.showText=this.text.trim()?this.text:'静静的等待用户输入';
				this.$parent.text=this.text;//组件之间传递数据；
				this.activeColor=this.text.trim()?'#61EA74':'';/*改变样式*/
				
			},
			changeSon:function(){
				this.text=this.$refs.myEdit.innerHTML;/*当span标签编辑时，使input和span内容一致*/

			}
		},
		template:`<div><h1>组件通信练习 </h1><sonComponent v-model='text' @show='showSomething' ></sonComponent><div :style='{color:activeColor}'><strong>我是父组件：</strong><span contenteditable='true' @input='changeSon'　ref='myEdit'>{{showText}}</span></div></div>`,
		components:{
			'sonComponent':sonComponent
		}
	},


	taskMenu={
		data:function(){
			return {
		tasks:[
			{
				header:'任务一',
				items:[{
					title:'标题： ',
					content:'样式更改'
				},{
					title:'内容： ',
					content:'谢谢嘻嘻嘻嘻嘻嘻'
				},{
					title:'时间：',
					content:'2018年7月23日'
				}
				]

			},		
			{
				header:'任务二',
				items:[{
					title:'标题： ',
					content:'自定义事件'
				},{
					title:'内容： ',
					content:'谢谢嘻嘻嘻嘻嘻嘻'
				},{
					title:'时间：',
					content:'2018年7月24日'
				}
				]
			},			
			{
				header:'任务三',
				items:[{
					title:'标题： ',
					content:'插槽'
				},{
					title:'内容： ',
					content:'谢谢嘻嘻嘻嘻嘻嘻'
				},{
					title:'时间：',
					content:'2018年7月25日'
				}
				]
			},			
			{
				header:'任务四',
				items:[{
					title:'标题： ',
					content:'插槽'
				},{
					title:'内容： ',
					content:'谢谢嘻嘻嘻嘻嘻嘻'
				},{
					title:'时间：',
					content:'2018年7月26日'
				}
				]
			},			
			{
				header:'任务五',
				items:[{
					title:'标题： ',
					content:'插槽'
				},{
					title:'内容： ',
					content:'谢谢嘻嘻嘻嘻嘻嘻'
				},{
					title:'时间：',
					content:'2018年7月27日'
				}
				]
			},			
			{
				header:'任务六',
				items:[{
					title:'标题： ',
					content:'插槽'
				},{
					title:'内容： ',
					content:'谢谢嘻嘻嘻嘻嘻嘻'
				},{
					title:'时间：',
					content:'2018年7月28日'
				}
				]
			}

		]

	} } ,

		template:`
		<div>
			<h2><slot name='title'>任务栏</slot></h2>
			<main>
				<div v-for='task of tasks' class="taskContainer">
					<header>{{task.header}}</header>
					<div id="section-wrap">
						<section v-for='item of task.items'>
							 <span>{{item.title}}</span>{{item.content}}
						</section>
					</div>
				</div>
			</main>
		</div>
		`
	},
	mySlot={
		data:function(){
			return{
				title:'任务栏'
			}

		},
		template:`<div><task-menu><template slot='title'>{{title}}</template></task-menu></div>`,
		components:{
			'task-menu':taskMenu
		}
	};

Vue.component("father-component",fatherComponent);
Vue.component("my-slot",mySlot);

var app1=new Vue({
	el:'#app1',
	data:{
		items:[
		{name:'张三',status:'合格',operation:'删除',show:true},
		{name:'李四',status:'不合格',operation:'删除',show:true},
		{name:'王五',status:'待审核',operation:'审核',show:true},
		{name:'赵六',status:'待审核',operation:'审核',show:true},
		{name:'孙七',status:'待审核',operation:'审核',show:true}
		]

	},
	methods:{
		deleteOrCheck:function(event){
			var index=event.currentTarget.dataset.index;
			if(this.items[index].operation=='删除'){
				this.items[index].show=false;
			}else{
				this.items[index].status='合格';
				this.items[index].operation='删除';
			}

		},
		addOne:function(){
			var str=prompt('请输入你要添加的一个姓名！');
			this.items.push({name:str,status:'待审核',operation:'审核',show:true});
		}
	}

}),

app2=new Vue({
	el:'#app2',
	data:{
		styleObject:{background:'red',width:'100px',height:'100px'}
	},
	methods:{
}

}
),
app3=new Vue({
	el:'#app3',
	data:{
		checked:"",
		showText:'我也静静等待用户输入！',
		activeColor:''
	},
		methods:{
		showSomething:function(){
			this.showText=this.text.trim()?this.text:'我也静静等待用户输入！';
			this.activeColor=this.text.trim()?'#F43BE7':'';/*改变样式*/
			
		}
	}

}),
app4=new Vue({
	el:'#app4',
	data:{},
	methods:{

	}
}),
app5=new Vue({
	el:'#app5',
	data:{
		items1:[{caption:'第一章',isActive:true,content:'在很多情况下，Vue 可以自动得出过渡效果的完成时机。默认情况下，Vue 会等待其在过渡效果的根元素的第一个 transitionend 或 animationend 事件。然而也可以不这样设定——比如，我们可以拥有一个精心编排的一系列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。'},
		{caption:'第二章',isActive:false,content:'不同于 <transition>，它会以一个真实元素呈现：默认为一个 <span>。你也可以通过 tag 特性更换为其他元素。 过渡模式不可用，因为我们不再相互切换特有的元素。 内部元素 总是需要 提供唯一的 key 属性值。'}, 
		{caption:'第三章',isActive:false,content:'<transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 v-move 特性，它会在元素的改变定位的过程中应用。像之前的类名一样，可以通过 name 属性来自定义前缀，也可以通过 move-class 属性手动设置。'},
		{caption:'第四章',isActive:false,content:'这个看起来很神奇，内部的实现，Vue 使用了一个叫 FLIP 简单的动画队列 使用 transforms 将元素从之前的位置平滑过渡新的位置。 我们将之前实现的例子和这个技术结合，使我们列表的一切变动都会有动画过渡。'} 
		],
		items2:[1,2,3,4,5,6,7,8,9],
		show:true,
	},
	computed:{
	

	},
	methods:{
		change:function(event){
			this.items1.forEach(function(item){item.isActive=false})
			// [].forEach.call(this.items1,function(item){item.isActive=false});
			this.items1[event.target.dataset.index].isActive=true;

		}
	}
});

