package com.PAF.backend.service.impl;

import com.PAF.backend.dto.workStatusDto;
import com.PAF.backend.entity.workStatus;
import com.PAF.backend.exception.ResourceNotFoundException;
import com.PAF.backend.mapper.workStatusMapper;
import com.PAF.backend.repository.workStatusRepository;
import com.PAF.backend.service.workStatusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class workStatusServiceImpl implements workStatusService {


    private workStatusRepository workstatusRepository;


    @Override
    public workStatusDto createWorkStatus(workStatusDto workstatusDto) {

        workStatus workstatus = workStatusMapper.mapToworkStatus(workstatusDto);
        workStatus savedStatus = workstatusRepository.save(workstatus);
        return workStatusMapper.mapToworkStatusDto(savedStatus);


    }

    @Override
    public workStatusDto getWorkStatusById(Long statusId) {
        workStatus workstatus = workstatusRepository.findById(statusId).orElseThrow(() -> new ResourceNotFoundException("Status is not exist with given id : " + statusId));

        return workStatusMapper.mapToworkStatusDto(workstatus);
    }

    @Override
    public List<workStatusDto> getAllWorkStatus() {
        List<workStatus> workstatuss = workstatusRepository.findAll();
        return workstatuss.stream().map((workstatus) -> workStatusMapper.mapToworkStatusDto(workstatus)).collect(Collectors.toList());
    }

    @Override
    public workStatusDto updateWorkStatus(Long statusId, workStatusDto updatedStatus) {

        workStatus workstatus = workstatusRepository.findById(statusId).orElseThrow(
                () -> new ResourceNotFoundException("Status Not exists " + statusId)
        );

        workstatus.setAchievementDescription(updatedStatus.getAchievementDescription());
        workstatus.setDistanceRun(updatedStatus.getDistanceRun());
        workstatus.setPushupsCompleted(updatedStatus.getPushupsCompleted());
        workstatus.setWeightLifted(updatedStatus.getWeightLifted());

        workStatus updatedStatusObj = workstatusRepository.save(workstatus);

        return workStatusMapper.mapToworkStatusDto(updatedStatusObj);
    }

    @Override
    public void deleteWorkStatus(Long statusId) {

        workStatus workstatus = workstatusRepository.findById(statusId).orElseThrow(
                () -> new ResourceNotFoundException("Status Not exists " + statusId)
        );

        workstatusRepository.deleteById(statusId);

    }
}
