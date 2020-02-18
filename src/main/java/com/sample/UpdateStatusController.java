package com.sample;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/updatestatus")
public class UpdateStatusController {

	@RequestMapping("")
	public String index() {
		return "update_status";
	}
	
	@ResponseBody
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public Map<String, String> updates(int previousStatusValue) {
		Map<String, String> map = new HashMap<>();
		// 前のステータス
		StatusEnum previousStatusEnum = StatusEnum.of(previousStatusValue);
		// 現在の変更したステータス
		StatusEnum nowStatusEnum = StatusEnum.of(previousStatusEnum.getNextStatusValue());
		// 次のステータス
		StatusEnum nextStatusEnum = StatusEnum.of(nowStatusEnum.getNextStatusValue());
		
		map.put("nowStatusName", nowStatusEnum.getStatusName());
		map.put("nowStatusValue", String.valueOf(nowStatusEnum.getStatusValue()));
		map.put("nextStatusName", nextStatusEnum.getStatusName());
		
		return map;
	}
	
}
