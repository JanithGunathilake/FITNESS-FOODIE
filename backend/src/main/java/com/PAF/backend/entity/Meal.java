package com.PAF.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="mealPlan")
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "meal_time")
    private String time;

    @Column(name = "meal_name")
    private String mealName;

    @Column(name= "meal_ingredients")
    private String ingredient;

    @Column(name= "meal_description")
    private String description;
}



