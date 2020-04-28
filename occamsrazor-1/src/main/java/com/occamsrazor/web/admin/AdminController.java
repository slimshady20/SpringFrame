package com.occamsrazor.web.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamsrazor.web.util.Messenger;

@RestController
@RequestMapping("/member")
public class AdminController {
@Autowired	public AdminService memberService; 
	@PostMapping("/join")    //join 의 line134 post와 연결해주는것
	public Messenger add(@RequestBody Admin member) {  // data type
		 int current = memberService.count();
		//	memberService = new MemberServiceImpl(); Autowired 넣음으로써 new자동으로추가해줌
	memberService.add(member);   // post를 써야하는 이유.
/*	int count = memberService.count();
	Messenger result =null;
	if(count== 1) {
		result = Messenger.SUCCESS;
	}else {
		result = Messenger.FAIL;
	}
		return result;*/
		return (memberService.count()== (current+1))? Messenger.SUCCESS:  Messenger.FAIL;
	}
	@PostMapping("/login")
	public Messenger login(@RequestBody Admin member) {
//		memberService = new MemberServiceImpl();
		return (memberService.login(member))? Messenger.SUCCESS : Messenger.FAIL;
/*	boolean loginOk = memberService.login(member);
	String message = "SUCCESS";
	if(!memberService.login(member)) {
		message= "EPIC FAIL";	
	}		
	return message;   이걸 한문장으로 */
	
	}
	@GetMapping("/detail")
	public Admin detail(@RequestBody Admin member) {
		Admin detail = new Admin();
		memberService = new AdminServiceImpl();
		return detail;
	}
	@GetMapping("/list")
	public Admin[] list(@RequestBody Admin member) {
	Admin[] returnList =new Admin[5];
		memberService = new AdminServiceImpl();
		return returnList;
	}
	@GetMapping("/count")
	public  int count(@RequestBody Admin member) {
		int returnCount = 0;
		memberService = new AdminServiceImpl();

		return returnCount;
	}
	@PutMapping("/update")
	public Admin update(@RequestBody Admin member) {
		Admin updateMember = new Admin();
		memberService = new AdminServiceImpl();

		return updateMember;
	}
	@DeleteMapping("/delete")
	public Admin delete(@RequestBody Admin member) {
		Admin deleteMember = new Admin();
		memberService = new AdminServiceImpl();

		return deleteMember;
	}
}
