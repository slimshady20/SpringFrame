package com.occamsrazor.web.lotto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamsrazor.web.util.Credit;
import com.occamsrazor.web.util.Messenger;
@RestController
@RequestMapping("/lotto")
public class LottoController {
@Autowired	LottoService lottoService;
	@PostMapping("/buy")
	public Messenger lotto(@RequestBody Lotto lotto) {
		int current = lottoService.count();
		lottoService.add(lotto);
		return (lottoService.count()== current+1)? Messenger.SUCCESS: Messenger.FAIL;
	}

@GetMapping("/number/{userid}")
	public Credit number(@PathVariable String userid) {
	System.out.println("userid" +userid);
	Credit credit = null;
	return credit.A;
}
}