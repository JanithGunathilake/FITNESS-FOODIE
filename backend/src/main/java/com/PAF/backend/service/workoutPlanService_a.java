package com.PAF.backend.service;

import com.PAF.backend.dto.workoutPlanDto_a;

import java.util.List;

public interface workoutPlanService_a {
    workoutPlanDto_a createworkoutplan(workoutPlanDto_a workoutplanDto_a);

    workoutPlanDto_a getworkoutplanById(Long wid);

    List<workoutPlanDto_a> getallworkoutplan_a();

    workoutPlanDto_a updateworkoutplan(Long wid, workoutPlanDto_a updatedworkoutplan);

    void deleteworkoutplan(Long wid);

}
