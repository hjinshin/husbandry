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

    @GetMapping("/api/sleep")
    public ResponseEntity<ResponseDTO> getNextDay() {
        int day = 2;
        // 동물성장(나이, w, 가치 변경 - w와 가치는 5세까지만 성장)
        // 컨디션 변경 및 그에 따른 가치 하락
        // 아기 생성
        // 날짜 업데이트
        return ResponseEntity.ok().body(new ResponseDTO(true, day));
    }
}
