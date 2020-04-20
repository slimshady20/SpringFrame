package com.occamsrazor.web.member;

public class MemberServiceImpl implements MemberService{
private Member[] members;
private int count;
public MemberServiceImpl() {
	members = new Member[5];
	count = 0;
}
@Override
public void add(Member member) {
	members[count]= member;
	count++;
	
}
@Override
public Member[] list() {
	// TODO Auto-generated method stub
	return members;
}
@Override
public Member detail(String userid) {
	Member detail = null;
	for(int i=0; i<count; i++) {
		if(userid.equals(members[i].getUserid())) {
			detail = members[i];
			break;
		}
	}
	return detail;
}

@Override
public int count() {
	// TODO Auto-generated method stub
	return count;
}

@Override
public void update(Member member) {
	for(int i=0; i<count; i++) {
		if(member.getUserid().equals(members[i].getUserid())){
			members[i].setPasswd(member.getPasswd());
			
		}
	}
	
}
@Override
public void delete(Member member) {
	for(int i= 0; i<count; i++) {
		if(member.getUserid().equals(members[i].getUserid())
				&& member.getPasswd().equals(members[i].getPasswd())){
			members[i] = members[count-1];
			members[count-1]= null;
			count--;
			
			
		}
	}
	
}

}
