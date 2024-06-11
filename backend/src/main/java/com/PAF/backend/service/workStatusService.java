package com.PAF.backend.service;

import com.PAF.backend.dto.workStatusDto;

import java.util.List;

public interface workStatusService {

    workStatusDto createWorkStatus(workStatusDto workstatusDto);

    workStatusDto getWorkStatusById(Long statusId);

    List<workStatusDto> getAllWorkStatus();

    workStatusDto updateWorkStatus(Long statusId, workStatusDto updatedStatus);

    void deleteWorkStatus(Long statusId);

}
