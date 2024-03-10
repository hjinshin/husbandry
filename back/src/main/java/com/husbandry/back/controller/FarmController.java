package com.husbandry.back.controller;

import com.husbandry.back.dto.FarmDTO;
import com.husbandry.back.dto.ResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class FarmController {
    @GetMapping("/api/farminfo")
    public ResponseEntity<ResponseDTO> getFarmInfo() {
        // 사용자 농장 정보 전송
        int[] test_array = new int[0];
        FarmDTO farmDTO = new FarmDTO(3, test_array, null);
        return ResponseEntity.ok().body(new ResponseDTO(true, farmDTO));
    }
    @PutMapping("/api/buy")
    public ResponseEntity<ResponseDTO> updateFarmThruBuy(@RequestParam Integer num, Integer land) {
        // 동물 구매에 의한 농장 업데이트
        System.out.println(num + " " + land);
        return ResponseEntity.ok().body(new ResponseDTO(true, new FarmDTO.Profile(null, null, new String[0])));
    }
    @PutMapping("/api/sell")
    public ResponseEntity<ResponseDTO> updateFarmThruSell(@RequestParam Integer land) {
        // 동물 판매에 의한 농장 업데이트
        System.out.println(land);
        return ResponseEntity.ok().body(new ResponseDTO(true, new FarmDTO.Profile(null, null, new String[0])));
    }

    @PutMapping("/api/land")
    public ResponseEntity<ResponseDTO> updateLand() {
        // 사용자 토지 구매
        System.out.println("토지 구매");
        return ResponseEntity.ok().body(new ResponseDTO(true, 5));
    }
    @PutMapping("/api/condition")
    public ResponseEntity<ResponseDTO> updateAnimCond(@RequestParam Integer order, Integer land, String nickName) {
        // order: 1) enjoy, 2) feed, 3) clean, 4) nickname, 5)mating
        // order에 따른 동물의 상태 변경
        System.out.println(order + " " + land + " " + nickName);
        return ResponseEntity.ok().body(new ResponseDTO(true, new FarmDTO.Profile(null, null, new String[0])));
    }

    @PutMapping("/api/breeding")
    public ResponseEntity<ResponseDTO> updateBreeding(@RequestParam Integer parent1, Integer parent2) {
        System.out.println(parent1 + " " + parent2);
        return ResponseEntity.ok().body(new ResponseDTO(true, null));
    }
}
