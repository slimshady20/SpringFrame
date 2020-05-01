package com.occamsrazor.web.admin;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;
@Component
@Getter @Setter
public class Admin {
private String name,position,email,phoneNumber,employNumber,passwd,profile,registerDate;
	
@Override
	public String toString() {
		return String.format("%s,%s,%s,%s,%s,%s,%s,%s,"
				, name,position,email,phoneNumber,employNumber,passwd,profile,registerDate);
	}
}
