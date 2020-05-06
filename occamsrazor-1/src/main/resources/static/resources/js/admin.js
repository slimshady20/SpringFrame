"use Strict"

var admin = admin || {}
admin = (()=>{
	const WHEN_ERROR  = `호출하는 Js파일을 찾지 못했습니다.`
	let user_vue, lost_vue
	let init = ()=>{
		user_vue = `/resources/vue/user_vue.js`
		lost_vue = `/resources/vue/lost_vue.js`
		onCreate()
	}
	let onCreate =() =>{
		
		$.when(
				$.getScript(user_vue),
				$.getScript(lost_vue)
				
					
		).done(()=>{
			setContentView()
			
			$.getJSON('/users', d =>{
				$('#total_count').text('총회원수 : ' + d.length)
				$.each(d, (i,j) =>{	// each for라고생각하면됨
					
//		$.each(obj, function (index, item) {
// 객체를 전달받으면 index는 객체의 key(property)를 가리키고 // item은 키의 값을 가져옵니다.
					
//				<span id= "user_`+(i+1)`"></span> 내가틀린부분.	
					$(`<tr>
							<td>	
							<span>${i+1}</span>            			
							</td>
							<td>
							<span>${j.userid}</span>   
							</td>
							<td>
							
							<span id= "user_`+(i+1)+`"></span>
							</td>
							<td>
							<span>	${j.ssn} </span> 
							</td>
							<td>
							<span>${j.email} </span>
							</td>
							<td>
							<span>	${j.phoneNumber}</span>
							</td>
							<td>
							<span>${j.registerDate}</span>
							
							</td>
					</tr>`).appendTo('#userData')
					
					$(`<a>${j.name}</a>`)
					.css({cursor:'pointer', color: 'blue'})
					.appendTo("#user_"+ (i+1))
					
					.click(e=> {
						
						$('#userData').empty()
						
						$(userVue.detail()).appendTo('#userData')
						
						$.getJSON(`/users/${j.userid}`,d=>{
							$('#userId').text(d.userid)
							$('#userName').text(d.name)
							$('#userSSN').text(d.ssn)
							$('#userAddr').text(d.addr)
							$('#userEmail').text(d.email)
							$('#userPhoneNumber').text(d.phoneNumber)
							$('#registerDate').text(d.registerDate)
							
						})
					})
				
					
				}) //each
			})	//getJSON
			// 여기에 lost
			
			$('#lostList').click(e=>{
			
						e.preventDefault()
						$('#content').empty()
						$('#content').html(`<table id="losts">
						<tr>
							<th>	
							<span>No.</span>            			
							</th>
							<th>
							<span>분실물 ID<</span>   
							</th>
							<th>
							<span>습득물품명</span>
							</th>
							<th>
							<span>습득일자</span> 
							</th>
							<th>
							<span>습득물분류</span>
							</th>
							 <th>
                            <span>습득위치(지하철)</span>
                            </th>
							
						</tr>
						</table>`)
						$.getJSON(`/losts`, d=>{
							$.each(d, (i,j)=>{
								$(`<tr>
							<td>	
							<span>${i+1}</span>            			
							</td>
							<td>
							<span>${j.lostid}</span>   
							</td>
							<td>
							<span id="lost_`+(i+1)+`"></span>
							</td>
							<td>
							<span>${j.date}</span>
							</td>
							<td>
							<span>${j.classification}</span> 
							</td>
							<td>
							<span>${j.location}</span>
							</td>
							
						</tr>`).appendTo('#losts')
							$(`<a>${j.name}</a>`)
							.css({cursor: 'pointer', color: 'blue'})
							.appendTo("#lost_"+ (i+1))
							.click(e=>{
								e.preventDefault()
								$('#losts').empty()
								$(lostVue.detail()).appendTo('#losts')
								$.getJSON(`/losts/${j.lostid}`, d=>{
									
									$('#lostid').text(d.lostid)
									$('#name').text(d.name)
									$('#date').text(d.date)
									$('#classification').text(d.classification)
									$('#location').text(d.location)
									
									
								})
							})
							}) //each
						}) //  getJSON
					
					})
			
			
		}).fail(()=>{
			alert(WHEN_ERROR)
		})
	
		
		
		
		
		
	}
	let setContentView =()=>{
		$('#userData tr').first().css({'background-color': 'yellow'})
	}
	return{init}
})()



