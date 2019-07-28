package com.example.IPLFantasy;

import javafx.application.Application;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@SpringBootApplication
@EnableJpaAuditing
@Controller
public class IPLFantasyApplication {
	public static void main(String[] args) {
		SpringApplication.run(IPLFantasyApplication.class, args);
	}


}
