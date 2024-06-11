package com.PAF.backend.mapper;

import com.PAF.backend.dto.workStatusDto;
import com.PAF.backend.entity.workStatus;

public class workStatusMapper {
    public static workStatusDto mapToworkStatusDto(workStatus workstatus){
        return new workStatusDto(
                workstatus.getId(),
                workstatus.getUserId(),
                workstatus.getAchievementDescription(),
                workstatus.getTimestamp(),
                workstatus.getDistanceRun(),
                workstatus.getPushupsCompleted(),
                workstatus.getWeightLifted()

        );
    }

    public static workStatus mapToworkStatus(workStatusDto workstatusDto){
        return new workStatus(
                workstatusDto.getId(),
                workstatusDto.getUserId(),
                workstatusDto.getAchievementDescription(),
                workstatusDto.getTimestamp(),
                workstatusDto.getDistanceRun(),
                workstatusDto.getPushupsCompleted(),
                workstatusDto.getWeightLifted()
        );
    }
}
