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
        UserDTO userDTO = new UserDTO(10000,1, test, null);
        return ResponseEntity.ok().body(userDTO);
    }

}
