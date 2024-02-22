package com.husbandry.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class CookieDTO {
    private Boolean success;
    private UUID cookie;
}
