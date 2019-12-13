package com.sample;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/check_email_api")
public class CheckEmailApiController {

	@RequestMapping(value = "/emailcheck", method = RequestMethod.POST)
	public Map<String, String> emailcheck(String email) {
		Map<String, String> map = new HashMap<>();
		String duplicateMessage = null;
		if ("iga@sample.com".equals(email)) {
			duplicateMessage =  "「" + email + "」は既に登録されているメールアドレスです";
		} else {
			duplicateMessage =  "「" + email + "」は登録されていません";
		}
		map.put("duplicateMessage", duplicateMessage);
		return map;
	}
	
}
