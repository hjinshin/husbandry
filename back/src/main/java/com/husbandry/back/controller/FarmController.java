package com.husbandry.back.controller;

import com.husbandry.back.dto.FarmDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class FarmController {
    @GetMapping("/api/farminfo")
    public ResponseEntity<FarmDTO> getFarmInfo() {

        int[] test_array = new int[0];
        FarmDTO farmDTO = new FarmDTO(3, test_array, null);
        return ResponseEntity.ok().body(farmDTO);
    }
}
