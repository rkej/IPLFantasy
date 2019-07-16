package com.example.IPLFantasy.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class HomeController {
    @GetMapping(value="/signin")
    public void signinPage() {
    }
}


