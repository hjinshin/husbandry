package com.husbandry.back.testcontroller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Configuration
@RestController
public class TestController {
    @GetMapping('/api/exist')

}
