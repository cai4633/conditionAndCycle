// import Vue from 'vue';
// import {appData} from './data.js';
// var appData=require("./data.js").appData;

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
	data:appData.app1.data,
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
	data:appData.app5.data,
	computed:{

	},
	methods:{
		change:function(event){
			this.items1.forEach(function(item){item.isActive=false})
			this.items1[event.target.dataset.index].isActive=true;

		}
	}
});


// 级联选择器定义组件；
var cascaderList={
	props:['msg'],

	data:function(){
		return{
			id:0,
			show:false,
			layer:this.$parent.layer+1,
			isChecked:false,
			unique:Math.random().toFixed(5)
		}
	},
	computed:{
		items:function(){
			return this.msg;
		},
		itemsChild:function(){
			if(this.msg[this.id].children){
				return this.msg[this.id].children;
			}
		}

	},
	template:`<div class='position' :data-layer='layer' @click.stop='clickOnDetails'><ul ><li v-for='(item,index) of items' :class='{checked:isChecked}' :data-index='index' :id='index+layer+unique' :key='index+layer+unique'>{{item.label}} <i class="el-icon-arrow-right" v-if="item.children?true:false"></i></li></ul><cascader-list v-if="show"  :msg='itemsChild' @get-ifo='transmitIfo'></cascader-list></div>`,
	methods:{
			clickOnDetails:function(event){ 
				var targetIndex=event.target.dataset.index,
					curLayer=event.currentTarget.dataset.layer,
					siblings=event.target.parentNode.children;
					this.id=targetIndex?targetIndex:this.id;
					if(event.target.tagName=='LI'){//避免点击ul导致整个列表背景颜色改变和获取li内容出错；
							if(this.itemsChild){
								this.show=true;
							}

								if(this.$children[0]) {
										this.$children[0].show=false;
										this.$children[0].unique=Math.random().toFixed(5) ;//注意key值的重要性；
							}
								Array.prototype.forEach.call(siblings,function(item,index,arrays){
									item.classList.remove('checked');
								});	//点击时清空li背景颜色；
								event.target.classList.add('checked');//点击选中后改变li背景颜色；
								this.$emit('get-ifo',{label:event.target.innerText,layer:curLayer,target:event.target});
							
						}


				},
			transmitIfo:function($event){
				this.$emit('get-ifo',$event)
				}
	}
};

Vue.component('cascader-list',cascaderList);
var app6=new Vue({
	el:'#app6',
	data:{
		ifo:[]
	},
	computed:{
		ifoCopy:function(){

		}
	},

	components:{
		"my-cascader":{
			props:['information'],
			data:function(){
				return {items:{},show:false,layer:-1}
			},

			computed:{
				ifo:function(){
						return this.information.join('/');
					},

			},

			methods:{
					initMsg:function(){
						var that=this;
						if(this.information.length==0){
							this.show=true;
							this.items=appData.app6.data;
							while(that.$children[0]){
								that.$children[0].show=false;
								that=that.$children[0];
						}
						}
					},					
					


					transmitIfo:function($event){
									this.$emit('get-ifo',$event);
					},
	

					clickToClear:function(){
						if (event.target==event.currentTarget) {
							this.show=false;
							this.information.length=0;
						}
					}


			},

			"template":`<div @click='clickToClear'><h2 >级联组件</h2><input id='ifo-bar'placeholder='请选择您满意的选项'  v-model='ifo' type="text" name="cascader" @focus='initMsg'/><input type='submit' value='ENTER' /><cascader-list  :msg='items' v-if="show" @get-ifo='transmitIfo' ref='clearZone'></cascader-list></div>`
		}
	},

	methods:{
			getIfo:function($event){
				this.$set(this.ifo,$event.layer,$event.label);//动态绑定数组中的项；vue无法动态识别object中属性的添加和删除；
				if(parseInt($event.layer)+1!==this.ifo.length){//当点击前一级时，使后一级的选项在input中消失；
					this.ifo.length=parseInt($event.layer)+1;
				};

			}

	}
});

