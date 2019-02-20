package com.sample;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class ApiController {

	@RequestMapping(value = "/emailcheck", method = RequestMethod.POST)
	public Map<String, String> emailcheck(String email) {
		Map<String, String> map = new HashMap<>();
		if("iga@sample.com".equals(email)) {
			map.put("duplicateMessage", "「" + email + "」は既に登録されているメールアドレスです");
		} else {
			map.put("duplicateMessage", "「" + email + "」は登録されていません");
		}
		System.out.println("email : " + email);
		return map;
	}
}
