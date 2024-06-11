package com.PAF.backend.service.impl;

import com.PAF.backend.dto.MealDto;
import com.PAF.backend.entity.Meal;
import com.PAF.backend.exception.ResourceNotFoundException;
import com.PAF.backend.mapper.MealMapper;
import com.PAF.backend.repository.MealRepository;
import com.PAF.backend.service.MealService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MealServiceImpl implements MealService {

    private MealRepository mealRepository;
    @Override
    public MealDto createMeal(MealDto mealDto) {

        Meal meal = MealMapper.mapToMeal(mealDto);
        Meal savedMeal = mealRepository.save(meal);


        return MealMapper.mapToMealDto(savedMeal);
    }

    @Override
    public MealDto getMealById(Long mealId) {

        Meal meal = mealRepository.findById(mealId)
                .orElseThrow(()->new ResourceNotFoundException("Meal is not exist with given id:"+mealId));

        return MealMapper.mapToMealDto(meal);
    }

    @Override
    public List<MealDto> getAllMeals() {
        List<Meal> meals = mealRepository.findAll();
        return meals.stream().map(meal -> MealMapper.mapToMealDto(meal))
                .collect(Collectors.toList());

    }

    @Override
    public MealDto updateMeal(Long mealId, MealDto updatedMeal) {

        Meal meal = mealRepository.findById(mealId).orElseThrow(
                ()->new ResourceNotFoundException("Meal is not exist with given id:"+mealId));
        meal.setTime(updatedMeal.getTime());

        meal.setMealName(updatedMeal.getMealName());
        meal.setIngredient(updatedMeal.getIngredient());
        meal.setDescription(updatedMeal.getDescription());

        Meal updatedMealObj =  mealRepository.save(meal);
        return MealMapper.mapToMealDto(updatedMealObj);
    }

    @Override
    public void deleteMeal(Long mealId) {
        Meal meal = mealRepository.findById(mealId).orElseThrow(
                ()->new ResourceNotFoundException("Meal is not exist with given id:"+mealId));
        mealRepository.deleteById(mealId);
    }
}
