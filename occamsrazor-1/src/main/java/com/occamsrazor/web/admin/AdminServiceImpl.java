package com.occamsrazor.web.admin;

import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{
private Admin[] members;
private int count;

public AdminServiceImpl() {
	members = new Admin[5];
	count = 0;
}
@Override
public void add(Admin member) {
	members[count]= member;
	count++;
	
}
@Override
public Admin[] list() {
	// TODO Auto-generated method stub
	return members;
}
@Override
public Admin detail(String userid) {
	Admin detail = null;
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
public void update(Admin member) {
	for(int i=0; i<count; i++) {
		if(member.getUserid().equals(members[i].getUserid())){
			members[i].setPasswd(member.getPasswd());
			break;
		}
	}
	
}
@Override
public void delete(Admin member) {
	for(int i= 0; i<count; i++) {
		if(member.getUserid().equals(members[i].getUserid())
				&& member.getPasswd().equals(members[i].getPasswd())){
			members[i] = members[count-1];
			members[count-1]= null;
			count--;
			
			break;
		}
	}
	
}
@Override
public boolean login(Admin member) {
	boolean ok =false;
	for(int i=0; i<count; i++) {
		if(member.getUserid().equals(members[i].getUserid())&&
				member.getPasswd().equals(members[i].getPasswd())) {
				ok =true;
				break;
		}
}
	return ok;
 	}
}
