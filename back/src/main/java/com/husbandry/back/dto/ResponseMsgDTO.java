package com.husbandry.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseMsgDTO {
    private Boolean success;
    private String message;
}
