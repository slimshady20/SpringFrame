"use strict"

var user = user || {}	// name space= user(앞에) {} 넣으면 user가 json이된다 
user =	(() => {		
	let init = () => {
		alert('1. init 진입')
		onCreate()
	}  
	let onCreate = () =>{
		setContentView()
		$('#register_a').click(e=>{
			e.preventDefault();
			location.href="/admin"
})
$('#access_a').click(e=>{
		
})
	}
	let setContentView = ()=>{  // 객체가 만들어지면 화면을 뿌리는데 자바에 가서 어떤일을하는게 onCreate
		alert('2. setContentView 진입')
	}
	return{init} // 즉시실행구조
})()
