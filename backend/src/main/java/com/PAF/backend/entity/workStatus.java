package com.PAF.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "workStatus")
public class workStatus {
    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY)
    private Long id;

    @Column( name ="user_id")
    private String userId;

    @Column(name = "description")
    private String achievementDescription;

    @Column(name = "time_stamp")
    private LocalDateTime timestamp;

    @Column (name ="distance_run")
    private double distanceRun;

    @Column (name = "pushups_completed")
    private int pushupsCompleted;

    @Column (name = "weight_lifted")
    private double weightLifted;

    @PrePersist
    protected void onCreate() {
        this.timestamp = LocalDateTime.now();
    }

}
