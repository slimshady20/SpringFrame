package com.occamsrazor.web.member;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class MemberController {
	public MemberService memberService;
		
	@PostMapping("/join")    //join 의 line134 post와 연결해주는것
	public Member add(@RequestBody Member member) {  // data type
	System.out.println(">>>>");
	System.out.println(member.toString());
	memberService = new MemberServiceImpl();	
	memberService.add(member);
		return member;
	}
	

}
