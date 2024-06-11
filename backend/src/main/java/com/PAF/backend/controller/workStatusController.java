package com.PAF.backend.controller;


import com.PAF.backend.dto.workStatusDto;
import com.PAF.backend.entity.workStatus;
import com.PAF.backend.service.workStatusService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/status")
public class workStatusController { 

    private workStatusService workstatusService;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<workStatusDto> createStatus(@RequestBody workStatusDto workstatusDto){
        workStatusDto savedStatus = workstatusService.createWorkStatus(workstatusDto);
        return new ResponseEntity<>(savedStatus, HttpStatus.CREATED);
    }

    // Build Get Work Status by ID
    @GetMapping("{id}")
    public ResponseEntity<workStatusDto> getWorkStatusById(@PathVariable("id") Long statusId) {
        workStatusDto workstatusDto = workstatusService.getWorkStatusById(statusId);
        return ResponseEntity.ok(workstatusDto);
    }

    // Build Get ALl Work Status REST API
    @GetMapping
    public ResponseEntity<List<workStatusDto>> getAllWorkStatus(){
        List<workStatusDto> workstatus = workstatusService.getAllWorkStatus();
        return ResponseEntity.ok(workstatus);
    }

    // Build Update Status Rest API
    @PutMapping("{id}")
    public ResponseEntity<workStatusDto> updateStatus(@PathVariable("id") Long statusId, @RequestBody workStatusDto updatedStatus){
        workStatusDto workstatusDto = workstatusService.updateWorkStatus(statusId, updatedStatus);
        return ResponseEntity.ok(workstatusDto);
    }

    // Build Delete Status REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStatus(@PathVariable("id") Long statusId){
        workstatusService.deleteWorkStatus(statusId);
        return ResponseEntity.ok("Work Status deleted successfully...");
    }

}
