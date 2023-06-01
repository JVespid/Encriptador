package com.example.demo.services.desEncript;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class v1des implements versionationDesEncript {

	public String desEncrip (String textToPreProcess) {

        Pattern[] palabrasClave = {
            Pattern.compile("enter"),
            Pattern.compile("imes"),
            Pattern.compile("ai"),
            Pattern.compile("ober"),
            Pattern.compile("ufat")
        };
        
        String[] desencriptador = {"e", "i", "a", "o", "u"};
        
        String newstr = textToPreProcess;
        for (int i = 0; i < palabrasClave.length; i++) {
            Matcher matcher = palabrasClave[i].matcher(newstr);
            newstr = matcher.replaceAll(desencriptador[i]);
        }
        
        return newstr;
	}

}
