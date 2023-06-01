package com.example.demo.services.encript;

import java.util.regex.Pattern;

public class v1En implements versionationEncrip {

	public String encript(String textToProcess) {

        String textArea = "";

        Pattern[] encriptador = {Pattern.compile("e", Pattern.CASE_INSENSITIVE),
                                 Pattern.compile("i", Pattern.CASE_INSENSITIVE),
                                 Pattern.compile("a", Pattern.CASE_INSENSITIVE),
                                 Pattern.compile("o", Pattern.CASE_INSENSITIVE),
                                 Pattern.compile("u", Pattern.CASE_INSENSITIVE)};
        
        String[] palabrasClave = {"enter", "imes", "ai", "ober", "ufat"};

        String newstr = textToProcess;
        for (int i = 0; i < palabrasClave.length; i++) {
            newstr = encriptador[i].matcher(newstr).replaceAll(palabrasClave[i]);
        }

        return newstr;
	}

}
