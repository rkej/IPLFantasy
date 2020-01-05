package com.example.IPLFantasy.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class HomeController {

    @GetMapping(value = "/signin")
    public String signin_cli() {
        return "index.html";
    }
    @GetMapping(value="/register")
    public String register_cli(){
        return "index.html";
    }
    @GetMapping(value = "/home{email}")
    public String home_cli() { return "index.html";}
    @GetMapping(value = "/dashboard")
    public String dashboard_cli() { return "index.html";}
    @GetMapping(value = "/rules")
    public String rules_cli() { return "index.html";}
    @GetMapping(value = "/playing11{email}")
    public String playing11_cli(){ return "index.html"}
}


