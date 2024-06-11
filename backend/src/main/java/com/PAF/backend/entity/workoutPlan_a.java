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
@Table(name = "workoutPlan_a")

public class workoutPlan_a {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wid;

    @Column(name = "plan_name" , nullable = false, unique = true)
    private String planName;

    @Column(name = "plan_description" , nullable = false)
    private String planDescription;

}
