package com.example.demo.routes;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class routes {

	@GetMapping(value = "/")
	public String index() {

		return "index";

	}

}
