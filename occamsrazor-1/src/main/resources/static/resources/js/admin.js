"use Strict"

var admin = admin || {}
admin = (()=>{
	let admin_vue
	let init = ()=>{
		admin_vue = `/resources/vue/admin_vue.js`
		onCreate()
	}
	let onCreate =() =>{
		
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
            			
            			.click(e=>{
            				 e.preventDefault()
            		    	 $('#content').empty()
            		    	 $('#content').html(adminVue.detail())
            		    	.appendTo('#workers')
              				
            			})
            			
			}) //each
		})	//getJSON
	}
	let setContentView =()=>{
		$('#userData tr').first().css({'background-color': 'yellow'})
	}
	return{init}
})()


