"use Strict"

const adminVue ={
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
		},
		detail :()=>{
			return `<table id="workers">
	<tr>
	<td id ="admin" colspan="3"  style="text-align: center; padding-top: 10px; font-size:30px; font-weight:bold">관리자 정보</td>
	</tr>
	
	<tr>
		<td id= "photo" rowspan="4">
		<img src="https://blogsaays-com-3vkgf8gqdp8entcca1.netdna-ssl.com/wp-content/uploads/2014/02/no-user-profile-picture-whatsapp.jpg">
		</td>
		<td id= "name">이름</td>
		<td id="nameText"><input type="text" value="" id="serch" class="searchInput" placeholder="이름을 입력해주세요." style= "width: 400px; height: 50px;"></td>
	</tr>
	<tr>
		<td id= "position">직급</td>
		<td id="positionText"><input type="text" value="" id="serch" class="searchInput" placeholder="직급을 입력해주세요." style= "width: 400px; height: 50px;"></td>
	</tr>
	<tr>
		<td id ="email">이메일</td>
		<td id="emailText"><input type="text" value="" id="serch" class="searchInput" placeholder="이메일을 입력해주세요." style= "width: 400px; height: 50px;"></td>
	</tr>
	<tr>
		<td id= "phoneNumber">전화번호</td>
		<td id="PhoneNumberText"><input type="text" value="" id="serch" class="searchInput" placeholder="전화번호를 입력해주세요." style= "width: 400px; height: 50px;"></td>
	</tr>
	<tr>
	<td colspan="2"><input id ="admin_detail" type= "button" value= "등록"> </td>
	<td>
	<input id= "cancel-button" type= "button" value= "취소"></td>
	
	</tr>
	
</table>`
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


