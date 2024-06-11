package com.PAF.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class workStatusDto {
    private Long id;
    private String userId;
    private String achievementDescription;
    private LocalDateTime timestamp;
    private double distanceRun;
    private int pushupsCompleted;
    private double weightLifted;
}
