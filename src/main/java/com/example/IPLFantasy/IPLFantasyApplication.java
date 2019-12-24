package com.example.IPLFantasy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Controller;
@SpringBootApplication
@EnableJpaAuditing
@Controller
public class IPLFantasyApplication {
	public static void main(String[] args) {
		SpringApplication.run(IPLFantasyApplication.class, args);
	}


}
