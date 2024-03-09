package com.husbandry.back.controller;

import com.husbandry.back.dto.ResponseDTO;
import com.husbandry.back.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserController {
    @GetMapping("/api/userinfo")
    public ResponseEntity<ResponseDTO> getUserInfo() {
        List<Boolean> test = List.of(true, false);
        // 사용자 기본 정보 전송
        UserDTO userDTO = new UserDTO(10000,1, test, null);
        return ResponseEntity.ok().body(new ResponseDTO(true, userDTO));
    }

    @GetMapping("/api/balance")
    public ResponseEntity<ResponseDTO> getBalance() {
        // 사용자 잔고 전송
        System.out.println("잔고");
        return ResponseEntity.ok().body(new ResponseDTO(true, 12000));
    }

    @GetMapping("/api/draw")
    public ResponseEntity<ResponseDTO> getDraw(@RequestParam Integer order) {
        // order) 1: 일반적인, 2: 평범하지않은, 3: 희귀한, 4: 전설적인
        return ResponseEntity.ok().body(new ResponseDTO(true, 1));
    }
}
