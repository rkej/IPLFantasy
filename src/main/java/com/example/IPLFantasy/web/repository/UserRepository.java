package com.example.IPLFantasy.web.repository;

import com.example.IPLFantasy.web.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories(basePackages = "com.example.IPLFantasy.web.repository")
@Repository
public interface UserRepository extends JpaRepository<UserDto, Integer> {

}