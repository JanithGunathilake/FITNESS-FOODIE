package com.PAF.backend.service;


import com.PAF.backend.dto.MealDto;

import java.util.List;
//define methods
public interface MealService {
    MealDto createMeal(MealDto mealDto);

    MealDto getMealById(Long mealId);

    List<MealDto> getAllMeals();

    MealDto updateMeal(Long mealId, MealDto updatedMeal);

    void deleteMeal(Long mealId );
}







