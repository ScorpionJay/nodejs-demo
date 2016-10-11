// 分类
$.ajax({
	 url: "/gallery/classify",
}).done(function(data) {
  	 console.log("data",data)
  	 var html = ''
  	 $.each(data.tngou,function(i,o){
  	 	html += '<li class="class" onclick="javascript:getData('+ o.id +')">'+o.name+'</li>'
  	 })
  	 $('.classify').append(html)
})

// 获取数据
function getData(id){
	$.ajax({
	 	url: "/gallery/list/"+id,
	}).done(function(data) {
	  	 console.log("data",data)
	  	 var html = ''
	  	 $.each(data.tngou,function(i,o){
	  	 	html += '<p>'+o.title+'</p><img src="http://tnfs.tngou.net/img/'+ o.img +'" style="width:100px;"/>'
	  	 })
	  	 $('.list').empty().append(html)
	})
}

getData(2)
