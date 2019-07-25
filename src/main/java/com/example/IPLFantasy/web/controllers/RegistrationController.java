package com.example.IPLFantasy.web.controllers;

import com.example.IPLFantasy.web.dto.UserDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController{
    @PostMapping(value="/api/register")

    public ResponseEntity<String> register(@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName, @RequestParam("teamName") String teamName, @RequestParam("email") String email, @RequestParam("password") String password){
        UserDto userDto = new UserDto(firstName, lastName, teamName, email, password);
        return new ResponseEntity<>( "New user created", HttpStatus.OK );
    }

}