package com.plunker.backend.userprofile.controllers;

import com.plunker.backend.auth.services.ChangeUserService;
import com.plunker.backend.auth.services.UserService;
import com.plunker.backend.userprofile.dto.ChangePasswordRequest;
import com.plunker.backend.userprofile.dto.UserProfileDataResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor
@Tag(name = "Профиль пользователя")
public class UserProfileController {
    private final ChangeUserService changeUserService;
    private final UserService userService;

    @PutMapping("change-password")
    public void ChangePassword(@RequestBody @Valid ChangePasswordRequest changePasswordRequest) {
        changeUserService.updatePassword(
                changePasswordRequest.getOldPassword(),
                changePasswordRequest.getNewPassword()
        );
    }

    @GetMapping("")
    public UserProfileDataResponse GetProfileData(){
        var currentUser = userService.getCurrentUser();
        var profileData = new UserProfileDataResponse();

        profileData.setEmail(currentUser.getEmail());
        profileData.setIconUrl(currentUser.getIconUrl());

        return profileData;
    }
}
