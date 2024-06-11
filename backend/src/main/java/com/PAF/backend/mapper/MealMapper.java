package com.PAF.backend.mapper;

import com.PAF.backend.dto.MealDto;
import com.PAF.backend.entity.Meal;
// provides static methods to convert between Meal and MealDto objects
public class MealMapper {
    public static MealDto mapToMealDto(Meal meal){
        return new MealDto(
                meal.getId(),
                meal.getTime(),
                meal.getMealName(),
                meal.getIngredient(),
                meal.getDescription()
        );
    }
    public static Meal mapToMeal(MealDto mealDto){
        return new Meal(
                mealDto.getId(),
                mealDto.getTime(),
                mealDto.getMealName(),
                mealDto.getIngredient(),
                mealDto.getDescription()
        );
    }
}





