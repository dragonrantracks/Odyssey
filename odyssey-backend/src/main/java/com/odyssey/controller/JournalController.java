
package com.odyssey.controller;

import com.odyssey.dto.JournalDto;
import com.odyssey.dto.JournalRequest;
import com.odyssey.entity.Journal;
import com.odyssey.service.JournalService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/journals")
public class JournalController {

    private final JournalService journalService;

    public JournalController(JournalService journalService) {
        this.journalService = journalService;
    }

    @GetMapping
    public ResponseEntity<List<JournalDto>> getAllJournals() {
        return ResponseEntity.ok(journalService.getAllJournals());
    }

    @GetMapping("/public")
    public ResponseEntity<List<JournalDto>> getPublicJournals() {
        return ResponseEntity.ok(journalService.getPublicJournals());
    }

    @GetMapping("/my")
    public ResponseEntity<List<JournalDto>> getUserJournals(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(journalService.getUserJournals(userDetails.getUsername()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JournalDto> getJournalById(
            @PathVariable String id, 
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(journalService.getJournalById(id, userDetails.getUsername()));
    }

    @PostMapping
    public ResponseEntity<JournalDto> createJournal(
            @RequestBody JournalRequest journalRequest, 
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(journalService.createJournal(journalRequest, userDetails.getUsername()));
    }

    @GetMapping("/share/{id}")
    public ResponseEntity<JournalDto> shareJournal(
            @PathVariable String id, 
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(journalService.shareJournal(id, userDetails.getUsername()));
    }

    @PutMapping("/{id}")
    public ResponseEntity<JournalDto> updateJournal(
            @PathVariable String id, 
            @RequestBody JournalRequest journalRequest, 
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(journalService.updateJournal(id, journalRequest, userDetails.getUsername()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJournal(
            @PathVariable String id, 
            @AuthenticationPrincipal UserDetails userDetails) {
        journalService.deleteJournal(id, userDetails.getUsername());
        return ResponseEntity.ok().build();
    }
}
