package com.husbandry.back.controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class TestController {

    @GetMapping ("/api/test")
    public String testAPI(@RequestParam String message) {
        System.out.println(message);
        return "test";
    }
}
