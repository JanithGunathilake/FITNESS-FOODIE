package com.PAF.backend.controller;

import com.PAF.backend.dto.workoutPlanDto_a;
import com.PAF.backend.service.workoutPlanService_a;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/workoutPlan_a")
public class workoutPlanController_a {

    private workoutPlanService_a workoutplanservice_a;


    //Build add workput REST API
    @PostMapping
    public ResponseEntity<workoutPlanDto_a> createworkoutplan(@RequestBody workoutPlanDto_a workoutplanDto_a) {
        workoutPlanDto_a savedworkoutPlan_a = workoutplanservice_a.createworkoutplan(workoutplanDto_a);
        return new ResponseEntity<>(savedworkoutPlan_a, HttpStatus.CREATED);
    }

    //Build get workoutplan By Id REST API
    @GetMapping("{wid}")
    public ResponseEntity<workoutPlanDto_a> getworkoutplanById(@PathVariable("wid") Long wpid) {
        workoutPlanDto_a  workoutplanDto_a = workoutplanservice_a.getworkoutplanById(wpid);

        return ResponseEntity.ok(workoutplanDto_a);
    }

    //Get all workouts REST API
    @GetMapping
    public ResponseEntity<List<workoutPlanDto_a>> getAllworkoutplan() {
        List<workoutPlanDto_a> workoutplans_a =  workoutplanservice_a.getallworkoutplan_a();
        return ResponseEntity.ok(workoutplans_a);

    }

    //Update workout REST API
    @PutMapping("{wid}")
    public ResponseEntity<workoutPlanDto_a> updateworkoutplan(@PathVariable("wid") Long wpid,
                                                              @RequestBody workoutPlanDto_a updatedworkoutplan_a ){
        workoutPlanDto_a workoutplanDto_a = workoutplanservice_a.updateworkoutplan(wpid,updatedworkoutplan_a);
        return ResponseEntity.ok(workoutplanDto_a);
    }

    //Delete workout REST API
    @DeleteMapping("{wid}")
    public ResponseEntity<String> deleteworkoutplan(@PathVariable("wid") Long wpid) {
        workoutplanservice_a.deleteworkoutplan(wpid);
        return ResponseEntity.ok("Deleted workoutplan");
    }

}
