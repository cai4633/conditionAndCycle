// import Vue from 'vue';
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

})