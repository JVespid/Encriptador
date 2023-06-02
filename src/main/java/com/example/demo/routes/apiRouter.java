package com.example.demo.routes;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.desEncript.v1des;
import com.example.demo.services.desEncript.versionationDesEncript;
import com.example.demo.services.encript.v1En;
import com.example.demo.services.encript.versionationEncrip;
import com.example.demo.templates.dataToRequestPost;
import com.example.demo.templates.jsonAPIEnDes;
import com.example.demo.templates.jsonApiError;
import com.google.gson.Gson;

@RestController
@RequestMapping("/api/{version}/{type}")
public class apiRouter {

	private versionationDesEncript DesEncrypt;
	private versionationEncrip encrypt;
	private Gson gson = new Gson();

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public String apiGetV1(@PathVariable String version, @PathVariable String type,
			@RequestParam(defaultValue = "", name = "text") String text) {
		System.out.println("get  - " + text);
		return EncryptAndDesEncrypt(version, type, text);
	}

	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public String apiPostV1(@PathVariable String version, @PathVariable String type,
			@RequestParam(defaultValue = "", name = "text") String text) {
		// String text = requestData.getText();
		System.out.println("llega - " + text);
		return EncryptAndDesEncrypt(version, type, text);
	}

	public String EncryptAndDesEncrypt(String version, String type, String text) {

		String versionMin = version.toLowerCase();
		String typeMin = type.toLowerCase();

		String expession = "^v\\d+$";// regular expression
		Pattern regexVersion = Pattern.compile(expession);
		Matcher matcherVersion = regexVersion.matcher(versionMin);

		if (text.equals("")
				&& (!matcherVersion.matches() || !(typeMin.equals("encrypt") || typeMin.equals("desencrypt")))) {
			jsonApiError jsonError = new jsonApiError("error whit you url", 400);
			return gson.toJson(jsonError);

		}

		if (typeMin.equals("encrypt")) {
			jsonAPIEnDes jsonResult;

			switch (versionMin) {
			case "v1":
				encrypt = new v1En();
				String encypted = encrypt.encript(text);
				jsonResult = new jsonAPIEnDes(encypted, "text Encrypted successfully", 200);
				break;
			default:
				jsonApiError jsonError = new jsonApiError("failed to encrypt ", 401);
				return gson.toJson(jsonError);
			}

			return gson.toJson(jsonResult);
		}

		if (typeMin.equals("desencrypt")) {
			jsonAPIEnDes jsonResult;

			switch (versionMin) {
			case "v1":
				DesEncrypt = new v1des();

				String encypted = DesEncrypt.desEncrip(text);
				jsonResult = new jsonAPIEnDes(encypted, "text Desencrypted successfully", 200);
				break;
			default:
				jsonApiError jsonError = new jsonApiError("failed to encrypt ", 401);
				return gson.toJson(jsonError);
			}

			return gson.toJson(jsonResult);

		}

		jsonApiError jsonError = new jsonApiError("Error Servel Internal ", 500);
		return gson.toJson(jsonError);
	}

}
