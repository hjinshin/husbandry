package com.husbandry.back.controller;

import com.husbandry.back.dto.CookieDTO;
import com.husbandry.back.dto.LoginDTO;
import com.husbandry.back.dto.ResponseDTO;
import com.husbandry.back.dto.SignUpDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin
@RestController
public class LoginController {
    @PostMapping("/api/signup/id")
    public ResponseEntity<ResponseDTO> createNickName(@RequestParam String nickname) {
        System.out.println("id: " + nickname);
        // 닉네임 중복 여부 확인
        return ResponseEntity.ok().body(new ResponseDTO(true, null));
    }

    @PostMapping("/api/signup")
    public ResponseEntity<ResponseDTO> postPassWd(@RequestBody SignUpDTO signUpDTO) {
        System.out.println("id: " + signUpDTO.getId() + ", " + "passwd: " + signUpDTO.getPw());
        // 회원가입
        UUID uuid4 = UUID.randomUUID();
        return ResponseEntity.ok().body(new ResponseDTO(true, uuid4));
    }

    @PostMapping("/api/login")
    public ResponseEntity<ResponseDTO> postLogin(@RequestBody LoginDTO loginDTO) {
        System.out.println("id: " + loginDTO.getId() + "\npw: " + loginDTO.getPw());
        UUID uuid4 = UUID.randomUUID();
        // 로그인 확인
        return ResponseEntity.ok().body(new ResponseDTO(true, new CookieDTO(uuid4)));
    }
}
