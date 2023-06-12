package com.example.cmpt276.asn2.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavigationController {

    @GetMapping("/navigate")
    public String navigate() {
        return "redirect:/home.html";
    }
}