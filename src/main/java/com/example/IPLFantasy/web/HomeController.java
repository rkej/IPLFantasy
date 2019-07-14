package com.example.IPLFantasy.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
@ResponseBody
    @RequestMapping(value="/")
    public String homePage() {
        return "App.js";
    }
}


