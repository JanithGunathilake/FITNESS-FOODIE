package com.PAF.backend.mapper;

import com.PAF.backend.dto.workoutPlanDto_a;
import com.PAF.backend.entity.workoutPlan_a;

public class workoutPlanMapper_a {

    public static workoutPlanDto_a maptoworkoutPlanDto_a(workoutPlan_a workoutplan_a){
        return new workoutPlanDto_a(
                workoutplan_a.getWid(),
                workoutplan_a.getPlanName(),
                workoutplan_a.getPlanDescription()
        );
    }

    public static workoutPlan_a maptoworkoutPlan_a(workoutPlanDto_a workoutplanDto_a){
        return new workoutPlan_a(
                workoutplanDto_a.getWid(),
                workoutplanDto_a.getPlanName(),
                workoutplanDto_a.getPlanDescription()
        );
    }
}
