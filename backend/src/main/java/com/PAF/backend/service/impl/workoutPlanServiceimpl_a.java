package com.PAF.backend.service.impl;

import com.PAF.backend.dto.workoutPlanDto_a;
import com.PAF.backend.entity.workoutPlan_a;
import com.PAF.backend.exception.ResourceNotFoundException;
import com.PAF.backend.repository.workoutPlanRepository_a;
import com.PAF.backend.service.workoutPlanService_a;
import com.PAF.backend.mapper.workoutPlanMapper_a;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class workoutPlanServiceimpl_a implements workoutPlanService_a {

    private workoutPlanRepository_a workoutPlanRepository;


    @Override
    public workoutPlanDto_a createworkoutplan(workoutPlanDto_a workoutplanDto_a) {

        workoutPlan_a workoutplan_a = workoutPlanMapper_a.maptoworkoutPlan_a(workoutplanDto_a);
        workoutPlan_a savedworkoutplan_a =  workoutPlanRepository.save(workoutplan_a);


        return workoutPlanMapper_a.maptoworkoutPlanDto_a(savedworkoutplan_a);
    }

    @Override
    public workoutPlanDto_a getworkoutplanById(Long wid) {
        workoutPlan_a workoutplan_a = workoutPlanRepository.findById(wid)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Workoutplan not exist"));

        return workoutPlanMapper_a.maptoworkoutPlanDto_a(workoutplan_a);
    }

    @Override
    public List<workoutPlanDto_a> getallworkoutplan_a() {
        List<workoutPlan_a> workoutplans_a = workoutPlanRepository.findAll();
        return workoutplans_a.stream().map((workoutplan_a) -> workoutPlanMapper_a.maptoworkoutPlanDto_a(workoutplan_a))
                .collect(Collectors.toUnmodifiableList());
    }

    @Override
    public workoutPlanDto_a updateworkoutplan(Long wid, workoutPlanDto_a updatedworkoutplan) {

        workoutPlan_a workoutplan_a = workoutPlanRepository.findById(wid).orElseThrow(
                () -> new ResourceNotFoundException("Workoutplan not exist with given id : " + wid)
        );

        workoutplan_a.setPlanName(updatedworkoutplan.getPlanName());
        workoutplan_a.setPlanDescription(updatedworkoutplan.getPlanDescription());

        workoutPlan_a updatedworkoutPlanObj_a = workoutPlanRepository.save(workoutplan_a);

        return workoutPlanMapper_a.maptoworkoutPlanDto_a(updatedworkoutPlanObj_a);
    }

    @Override
    public void deleteworkoutplan(Long wid) {

        workoutPlan_a workoutplan_a = workoutPlanRepository.findById(wid).orElseThrow(
                () -> new ResourceNotFoundException("Workoutplan not exist with given id : " + wid)
        );

        workoutPlanRepository.deleteById(wid);

    }
}
