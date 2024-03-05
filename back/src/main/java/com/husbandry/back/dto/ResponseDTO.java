package com.husbandry.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Map;

@Data
@AllArgsConstructor
public class ResponseDTO {
    private Boolean success;
    private String message;
}
