// import Vue from 'vue';
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

			}
		},
		template:`<div><h1>组件通信练习 </h1><sonComponent v-model='text' @show='showSomething' ></sonComponent><div :style='{color:activeColor}'><strong>我是父组件：</strong><span contenteditable='true' @input='changeSon'>{{showText}}</span></div></div>`,
		components:{
			'sonComponent':sonComponent
		}
	};

Vue.component("son-component",sonComponent);
Vue.component("father-component",fatherComponent);

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
		showText:'我也静静等待用户输入！',
		activeColor:''
	},
		methods:{
		showSomething:function(){
			this.showText=this.text.trim()?this.text:'我也静静等待用户输入！';
			this.activeColor=this.text.trim()?'#F43BE7':'';/*改变样式*/
			
		}
	}

});

