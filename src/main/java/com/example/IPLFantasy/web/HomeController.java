package com.example.IPLFantasy.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HomeController {
    @RequestMapping(value="/test")
    public String homePage() {
        return "App";
    }
}


