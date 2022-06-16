package com.sample.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sample.form.CheckEmailForm;

@Controller
@RequestMapping("/checkemail")
//CrossOrigin対応(異なるサーバーからの呼び出しを許可)
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class CheckEmailController {

	@RequestMapping("")
	public String index() {
		return "input_email";
	}

	@ResponseBody
	@RequestMapping(value = "/check", method = RequestMethod.POST)
	public Map<String, String> check(CheckEmailForm checkEmailForm) {
		String email = checkEmailForm.getEmail();
		System.out.println("サーバー側「入力されたemail」：" + email);
		Map<String, String> map = new HashMap<>();
		String duplicateMessage = null;
		if ("iga@sample.com".equals(email)) {
			duplicateMessage = "「" + email + "」は既に登録されているメールアドレスです";
		} else {
			duplicateMessage = "「" + email + "」は登録されていません";
		}
		map.put("duplicateMessage", duplicateMessage);
		return map;
	}

}
