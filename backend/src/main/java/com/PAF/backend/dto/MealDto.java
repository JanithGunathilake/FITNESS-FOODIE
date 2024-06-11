package com.PAF.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class MealDto {
    private Long id;
    private String time;
    private String mealName;
    private String ingredient;
    private String description;
}



