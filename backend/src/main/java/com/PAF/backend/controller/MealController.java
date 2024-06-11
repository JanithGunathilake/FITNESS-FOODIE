package com.PAF.backend.controller;

import com.PAF.backend.dto.MealDto;
import com.PAF.backend.service.MealService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/meals")
public class MealController {

    private MealService mealService;

    //create add meals REST API
    @PostMapping
    public ResponseEntity<MealDto> createMeal( @RequestBody MealDto mealDto){
        MealDto savedMeal = mealService.createMeal(mealDto);
        return new ResponseEntity<>(savedMeal, HttpStatus.CREATED);

    }

    //get one meal REST API
    @GetMapping("{id}")
    public ResponseEntity<MealDto> getMealById(@PathVariable("id") Long mealId){
        MealDto mealDto = mealService.getMealById(mealId);
        return ResponseEntity.ok(mealDto);
    }

    //Get all meals REST API
    @GetMapping
    public ResponseEntity<List<MealDto>> getAllMeals(){
        List<MealDto> meals = mealService.getAllMeals();
        return ResponseEntity.ok(meals);
    }

    //update meal REST API
    @PutMapping("{id}")
    public ResponseEntity<MealDto> updateMeal(@PathVariable("id") Long mealId, @RequestBody MealDto updateMeal){
        MealDto mealDto = mealService.updateMeal(mealId, updateMeal);
        return ResponseEntity.ok(mealDto);
    }

    //delete meal REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMeal(@PathVariable("id") long mealId){
        mealService.deleteMeal(mealId);
        return ResponseEntity.ok("Meal deleted");
    }
}

