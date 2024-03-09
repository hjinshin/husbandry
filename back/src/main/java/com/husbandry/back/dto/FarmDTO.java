package com.husbandry.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class FarmDTO {
    private Boolean success;
    private Integer owned_land;
    private int[] mating;
    private LandInfo landInfo;
    @Data
    public static class LandInfo {
        private List<Profile> profile;
    }
    @Data
    @AllArgsConstructor
    public static class Profile {
        private Info info;
        private Value value;
        private String[] img;
    }
    @Data
    @AllArgsConstructor
    static class Info {
        private Integer price;
        private String nickname;
        private String State;
        private Integer age;
        private Integer health;
        private Integer enjoy;
        private Integer feed;
        private Integer clean;
    }
    @Data static class Value {
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
    }
}
