package com.example.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ex-js-api/like")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class LikeController {

	private static final Map<Integer, Integer> likeCountMap = new HashMap<>();

	@PostMapping("/add")
	public Map<String, Object> add(@RequestBody Map<String, Integer> requestBody) {
		Integer articleId = requestBody.get("articleId");
		likeCountMap.merge(articleId, 1, Integer::sum);

		Map<String, Object> response = new HashMap<>();
		response.put("articleId", articleId);
		response.put("likeCount", likeCountMap.get(articleId));
		return response;
	}

	@GetMapping("/list")
	public Map<String, Object> list() {
		Map<String, Object> response = new HashMap<>();
		response.put("likes", likeCountMap);
		return response;
	}

}
