package com.occamsrazor.web.lotto;

import org.springframework.stereotype.Service;

import com.occamsrazor.web.util.Credit;

@Service
public class LottoServiceImpl implements LottoService {
	private Lotto[] lottos;
	private int count;
	public LottoServiceImpl() {
		lottos = new Lotto[5];
		count = 0;
	}
	@Override
	public void add(Lotto lotto) {
		lottos[count]= lotto;
		count++;
		
	}
	@Override
	public int count() {
		// TODO Auto-generated method stub
		return count;
	}
	@Override
	public String detail(String userid) {
		String result= "3";
		return result;
	}
	

}
