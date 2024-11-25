package com.plunker.backend.userprofile.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.URL;

@Data
public class ChangeIconRequest {

    @NotBlank
    @NotNull
    @URL
    private String newIconUrl = "";
}
