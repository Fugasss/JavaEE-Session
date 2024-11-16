package com.plunker.backend.auth.repositories;

import com.plunker.backend.auth.models.RecoverPasswordToken;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecoverPasswordTokenRepository extends MongoRepository<RecoverPasswordToken, String> {
    RecoverPasswordToken findByToken(String token);
}
