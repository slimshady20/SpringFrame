package com.occamsrazor.web.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamsrazor.web.util.Messenger;

@RestController
@RequestMapping("/member")
public class MemberController {
@Autowired	public MemberService memberService; 
	@PostMapping("/join")    //join 의 line134 post와 연결해주는것
	public Messenger add(@RequestBody Member member) {  // data type
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
	public Messenger login(@RequestBody Member member) {
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
	public Member detail(@RequestBody Member member) {
		Member detail = new Member();
		memberService = new MemberServiceImpl();
		return detail;
	}
	@GetMapping("/list")
	public Member[] list(@RequestBody Member member) {
	Member[] returnList =new Member[5];
		memberService = new MemberServiceImpl();
		return returnList;
	}
	@GetMapping("/count")
	public  int count(@RequestBody Member member) {
		int returnCount = 0;
		memberService = new MemberServiceImpl();

		return returnCount;
	}
	@GetMapping("/update")
	public Member update(@RequestBody Member member) {
		Member updateMember = new Member();
		memberService = new MemberServiceImpl();

		return updateMember;
	}
	@GetMapping("/delete")
	public Member delete(@RequestBody Member member) {
		Member deleteMember = new Member();
		memberService = new MemberServiceImpl();

		return deleteMember;
	}
}
