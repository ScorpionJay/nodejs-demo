
// 获取数据
function getData(keyword){
	$.ajax({
	 	url: "/music/data/"+keyword,
	}).done(function(data) {
	  	 console.log("data",data)
	  	 var html = ''
	  	 $.each(data.data.info,function(i,o){
	  	 	html += '<p onclick="javascript:getSongInfo(\''+ o.hash +'\')">'+o.songname+'-'+ o.singername +'</p>'
	  	 })
	  	 $('.list').empty().append(html)
	})
}

getData('心跳')

function getSongInfo(hash){
	console.log(hash)
	$.ajax({
	 	url: "/music/songInfo/"+hash,
	}).done(function(data) {
	  	 console.log("data",data.url)
	  	 $('audio').attr('src',data.url)
	  	 $('audio')[0].play()
	})
}

