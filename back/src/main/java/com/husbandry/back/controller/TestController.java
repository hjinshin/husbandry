package com.husbandry.back.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin
@RestController
public class TestController {
    // 쿠키 확인
    @GetMapping ("/api/exist")
    public Boolean getCheckCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if(cookie.getName().equals("husbandry-uuid")) {
                    String value = cookie.getValue();
                    // 해당 uuid가 존재하는지 db에 확인
                    System.out.println("uuid: " + value);
                    return true;
                }
            }
        }
        // 쿠키가 없는 경우
        System.out.println("쿠키가 없습니다.");
        return false;
    }
    // 닉네임 설정
    @GetMapping("/api/nickname")
    public Boolean getNickName(@RequestParam String nickname, Boolean reset) {
        System.out.println(nickname + " " + reset);
        UUID uuid4 = UUID.randomUUID();
        return true;
    }
    @PostMapping("/api/nickname")
    public Boolean createNickName(@RequestParam String nickname) {
        System.out.println(nickname);
        UUID uuid4 = UUID.randomUUID();
        return true;
    }
}
