package com.plunker.backend.userprofile.services.storages;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("storage")
@Getter
@Setter
public class StorageProperties {
    private String location = "upload-dir";
}