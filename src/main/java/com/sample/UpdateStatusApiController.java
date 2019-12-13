package com.sample;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/update_status_api")
public class UpdateStatusApiController {

	@RequestMapping(value = "/updatestatus", method = RequestMethod.POST)
	public Map<String, String> updatestatus(int previousStatusValue) {
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
