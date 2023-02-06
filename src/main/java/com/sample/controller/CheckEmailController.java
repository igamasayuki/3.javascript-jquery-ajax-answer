package com.sample.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

	@GetMapping("")
	public String index() {
		return "input_email";
	}

	@ResponseBody
	@PostMapping("/check")
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
