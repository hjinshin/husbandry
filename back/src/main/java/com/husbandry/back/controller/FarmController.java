package com.husbandry.back.controller;

import com.husbandry.back.dto.FarmDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
public class FarmController {
    @GetMapping("/api/farminfo")
    public ResponseEntity<FarmDTO> getFarmInfo() {
        // 사용자 농장 정보 전송
        int[] test_array = new int[0];
        FarmDTO farmDTO = new FarmDTO(true, 3, test_array, null);
        return ResponseEntity.ok().body(farmDTO);
    }
    @PutMapping("/api/buy")
    public ResponseEntity<FarmDTO.Profile> updateFarmThruBuy(@RequestParam Integer num, Integer land) {
        // 동물 구매에 의한 농장 업데이트
        System.out.println(num + " " + land);
        return ResponseEntity.ok().body(new FarmDTO.Profile(null, null, new String[0]));
    }
    @PutMapping("/api/sell")
    public ResponseEntity<FarmDTO.Profile> updateFarmThruSell(@RequestParam Integer land) {
        // 동물 판매에 의한 농장 업데이트
        System.out.println(land);
        return ResponseEntity.ok().body(new FarmDTO.Profile(null, null, new String[0]));
    }

    @PutMapping("/api/land")
    public ResponseEntity<Integer> updateLand() {
        // 사용자 토지 구매
        System.out.println("토지 구매");
        return ResponseEntity.ok().body(5);
    }
}
