package com.example.IPLFantasy.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
@ResponseBody
    @GetMapping("test")
    public String homePage() {
        return "home";
    }
}


