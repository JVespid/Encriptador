package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/**").allowedOriginPatterns("*") // Utilizar allowedOriginPatterns en lugar de
																	// allowedOrigins
				.allowedMethods("GET", "POST") // Métodos HTTP permitidos
				.allowedHeaders("*").allowCredentials(true);
	}
}