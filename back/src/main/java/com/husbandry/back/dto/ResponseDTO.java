package com.husbandry.back.dto;

import lombok.Data;

import java.util.Map;

@Data
public class ResponseDTO {
    private Boolean success;
    private Map<String, Object> response;
}
