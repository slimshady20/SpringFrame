"use Strict"
var lost = lost || {}
lost = (()=>{
	const WHEN_ERROR = `호출하는 js파일을 찾지 못했습니다.`
		let lost_vue
		let init =()=>{
			lost_vue =`/resources/vue/lost_vue.js`
				onCreate()
		}
		let onCreate=()=>{
			$.when(
					$.getScript(lost_vue)	
					
			).done(()=>{
				setContentView()
				$('#lostList').click(e=>{
				$('#userData').empty()	
				
				$.getJSON('/losts',d =>{
				$('#total_count').text('총물품수:' + d.length)		
				$.each(d, (i,j)=>{
					
					$(`<tr>
							<th>	
							<span>${i+1}</span>            			
							</th>
							<th>
							<span>${j.lostid}</span>   
							</th>
							<th>
							<span id="lost_`+(i+1)+`"></span>
							</th>
							<th>
							<span>${j.date}</span>
							</th>
							<th>
							<span>${j.classification}</span> 
							</th>
							<th>
							<span>${j.location}</span>
							</th>
							
						</tr>`).appendTo('#userData')
							
							$(`<a>${j.name}</a>`)
							.css({cursor: 'pointer', color: 'blue'})
							.appendTo("#lost_"+ (i+1))
							.click(e=>{
								$('#userData').empty()
								$(lostVue.detail()).appendTo('#losts')
								$.getJSON(`/losts/${j.name}`, d=>{
									$('#lostid').text(d.lostid)
									$('#name').text(d.name)
									$('#date').text(d.date)
									$('#classification').text(d.classification)
									$('#location').text(d.location)
									
									
								})
							})
				}) //each
				})// getJSON
				
				})	
			}).fail(()=>{
				alert(WHEN_ERROR)
			})
			
		}
		let setContentView=()=>{
			$('#userData tr').first().css({'background-color': 'yellow'})
		}
		return{init}
})()


