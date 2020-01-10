package com.example.IPLFantasy.web.repository;


import com.example.IPLFantasy.web.dto.PlayingxiDto;
import com.example.IPLFantasy.web.dto.TeamDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
@EnableJpaRepositories(basePackages = "com.example.IPLFantasy.web.repository")
@Repository
@Transactional
public interface PlayingxiRepository extends JpaRepository<PlayingxiDto, Integer> {
    @Query(value = "select * FROM iqhyiotttzde4o5l.playingxi_dto where email = :email", nativeQuery = true)
    List<PlayingxiDto> findByEmail(@Param("email") String email);
    @Modifying

    @Query(value = "insert into iqhyiotttzde4o5l.playingxi_dto (id, team_name, email, name, notes, type, team) VALUES (:Id, :teamName, :email, :Name, :Notes, :type, :team)", nativeQuery = true)

    void insertTeam(@Param("Id") Integer Id, @Param("teamName") String teamName, @Param("email") String email, @Param("Name") String Name, @Param("Notes") String Notes, @Param("type") String type, @Param("team") String team);

    @Modifying
    @Query(value = "delete from iqhyiotttzde4o5l.playingxi_dto where id = :Id", nativeQuery = true)
    void deleteTeam(@Param("Id") Integer Id);

    @Query(value =  "select * from iqhyiotttzde4o5l.playingxi_dto where id = :Id", nativeQuery = true)
    PlayingxiDto findId(@Param("Id") Integer Id);

    @Query(value = "select * from iqhyiotttzde4o5l.playingxi_dto where team_name = :team_name", nativeQuery = true)
    List<PlayingxiDto> findByTeam(@Param("team_name") String team_name);
}
