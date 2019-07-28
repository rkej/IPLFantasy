package com.example.IPLFantasy.web.controllers;

import com.example.IPLFantasy.web.dto.UserDto;
import com.example.IPLFantasy.web.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;

@RestController
public class RegistrationController{
    @Autowired
    private UserRepository userRepo;

    @PostMapping(value="/api/register")
    public @ResponseBody ResponseEntity<String> register(@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName, @RequestParam("teamName") String teamName, @RequestParam("email") String email, @RequestParam("password") String password){

        UserDto userDto = new UserDto(firstName, lastName, teamName, email, password);
        userDto.setFirstName(firstName);
        userDto.setLastName(lastName);
        userDto.setEmail(email);
        userDto.setTeamName(teamName);
        userDto.setPassword(password);
        userRepo.save(userDto);
        return new ResponseEntity<>( "New user created", HttpStatus.OK );
    }

}