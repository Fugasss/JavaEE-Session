package com.plunker.backend.userprofile.dto;

import com.plunker.backend.auth.models.Role;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class UserProfileDataResponse {

    @Schema(description = "Почта пользователя")
    private String email;

    @Schema(description = "Ссылка на иконку профиля пользователя")
    private String iconUrl = "";

    @Schema(description = "Роль пользователя")
    private Role role = Role.ROLE_USER;
}
