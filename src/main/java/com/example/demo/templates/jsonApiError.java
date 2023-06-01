package com.example.demo.templates;

public class jsonApiError {

	private String message;
	private int code;

	public jsonApiError(String message, int code) {
		this.message = message;
		this.code = code;
	}

}
