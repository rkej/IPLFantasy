package com.example.IPLFantasy.web.controllers;

import com.example.IPLFantasy.web.dto.LoginDto;
import com.example.IPLFantasy.web.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@EnableJpaRepositories("com.example.IPLFantasy.web.repository")
public class LoginController{
    @Autowired UserRepository userRepo;
    @PostMapping(value = "/api/signin")
    public @ResponseBody
    ResponseEntity<String> login(@RequestParam("email") String email, @RequestParam("password") String password, UserRepository  repo) {

        List<String> login = userRepo.findByEmail(email, password);
        if (login.size() == 1) {
            return new ResponseEntity<>("Successful log in!", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>( "Login Failed", HttpStatus.OK );
        }

    }
}
