"use Strict"

var adminVue ={
		join: ()=>{
			return `  <table id="kcdc">
        <tr id="tr_1">
            <td colspan="2">
                <h1>관리자 등록</h1>
            </td>
        </tr>
        <tr id="menu">
            <td colspan="4">
            </td>
        </tr>
        <tr>
            <td id="content" colspan="4">
                <table id="admin" style="width: 80%; height:80%; margin: 0 auto">
			    <tr style="width: 80%;height: 50px;">
			      <td rowspan="4">
			        <img src="https://blogsaays-com-3vkgf8gqdp8entcca1.netdna-ssl.com/wp-content/uploads/2014/02/no-user-profile-picture-whatsapp.jpg"
			         style="height: 300px; width: 350px">
			      </td>
			      <td style="height: 20%">
			        <label>이름</label>
			      </td>
			      <td>
			        <input id="name" type="text" />
			      </td>
			    </tr>  
			    <tr style="height: 20%">
			      <td >
			        <label>직급</label>
			      </td>
			      <td>
			        <input id="position" type="text" />
			      </td>
			    </tr>
			    <tr style="height: 20%">
			      <td>
			        <label>이메일</label>
			      </td>
			      <td>
			        <input id="email" type="text" />
			      </td>
			    </tr>
			    <tr style="height: 20%">
			      <td>
			        <label>전화번호</label>
			      </td>
			      <td>
			        <input id="phoneNumber" type="text" />
			      </td>
			    </tr>
			    <tr style="height: 20%">
			      <td colspan="3" id="button_box">
			        
			      </td>
			    </tr>
			  </table>`
		}, 
		login :()=>{
			return `<article>
		<form id="login_box">
       	<label>ID</label><br>
		<input id="userid" type = "text"><br>
		<label>PassWord</label><br>
		<input id="passwd" type = "text"><br>
			</form>
				</article>`
		}
		
		
		
}

/*admin = (()=>{
	let init = ()=>{
		alert('1')
		
	}
	let onCreate =() =>{
		alert('2')
		setContentView()
	}
	let setContentView =()=>{
		alert('3')
	}
	return{init}
})() */


