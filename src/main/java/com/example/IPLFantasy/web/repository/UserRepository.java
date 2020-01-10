package com.example.IPLFantasy.web.repository;

import com.example.IPLFantasy.web.dto.PlayersDto;
import com.example.IPLFantasy.web.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@EnableJpaRepositories(basePackages = "com.example.IPLFantasy.web.repository")
@Repository
public interface UserRepository extends JpaRepository<UserDto, Integer> {
    @Query(value = "select email, password FROM iqhyiotttzde4o5l.user_dto where email = :email and password = :password", nativeQuery = true)
    List<String> findByEmail(@Param("email") String email, @Param("password") String password);

    @Query(value = "select team_name from iqhyiotttzde4o5l.user_dto where email = :email", nativeQuery = true)
    String findTeamName(@Param("email") String email);



}
