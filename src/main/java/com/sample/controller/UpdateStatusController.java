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

import com.sample.common.StatusEnum;
import com.sample.form.UpdateStatusForm;

@Controller
@RequestMapping("/updatestatus")
//CrossOrigin対応(異なるサーバーからの呼び出しを許可)
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class UpdateStatusController {

	@GetMapping("")
	public String index() {
		return "update_status";
	}

	@ResponseBody
	@PostMapping("/update")
	public Map<String, String> updates(UpdateStatusForm updateStatusForm) {
		Integer previousStatusValue = updateStatusForm.getPreviousStatusValue();
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
