package com.husbandry.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class UserDTO {
    private Integer money;
    private Integer day;
    private List<Boolean> owned_animal;
    private Baby baby;

    @Data
    public static class Baby {
        private Float w;
        private Integer height;
        private Integer width;
        private String color;
        private String h_head;
        private String w_head;
        private String h_body;
        private String w_body;
        private String h_tail;
        private String w_tail;
        private String h_f_leg;
        private String w_f_leg;
        private String h_b_leg;
        private String w_b_leg;
        private String h_wing;
        private String w_wing;
        private String r;
        private Integer price;
        private String nickname;
    }
}
