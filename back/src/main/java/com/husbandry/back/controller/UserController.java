package com.husbandry.back.controller;

import com.husbandry.back.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserController {
    @GetMapping("/api/userinfo")
    public ResponseEntity<UserDTO> getUserInfo() {
        List<Boolean> test = List.of(true, false);
        // 사용자 기본 정보 전송
        UserDTO userDTO = new UserDTO(10000,1, test, null);
        return ResponseEntity.ok().body(userDTO);
    }

    @GetMapping("/api/balance")
    public ResponseEntity<Integer> getBalance() {
        // 사용자 잔고 전송
        return ResponseEntity.ok().body(12000);
    }
}
