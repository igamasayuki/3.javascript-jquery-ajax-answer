package com.sample;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class EmailCheckController {

	@RequestMapping("/to_input_email")
	public String index() {
		return "input_email";
	}
	
}
