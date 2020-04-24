package com.occamsrazor.web.user;

public interface UserService {
	public void add(User user);
	public User[] list();
	public User detail(String userid);
	public int count();
	public User login(User user);
	public boolean  update(User user);
	//public void  delete(User user);
	public boolean remove(String userid);
}
