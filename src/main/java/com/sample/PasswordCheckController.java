package com.sample;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PasswordCheckController {

	@RequestMapping("/to_input_password")
	public String index() {
		return "input_password";
	}
	
}
